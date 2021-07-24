const express = require('express');
const route = express.Router();
const User = require('../model/user_account');
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwtHandlerRedis = require('../jwt_handler');
const authChecker = require('../middlware/auth');

route.post('/signup',
    [
        check('name', "Name is required").not().isEmpty(),
        check('email', "Please enter your valid email").isEmail(),
        check('password', "Use a strong password with 6 or more chanracter").isLength({ min: 6 }),
    ], async (req, res) => {
        //validate data
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ 'errors': error.array() });
        }
        var { name, email, password } = req.body;
        try {
            var alreadyExistUser = await User.findOne({ email: email });
            if (alreadyExistUser) {
                return res.status(400).json({ "errors": [{ msg: "User already exits !" }] });
            } else {
                //exncrypt the password
                const salt = await bcrypt.genSalt(10);
                password = await bcrypt.hash(password, salt);
                alreadyExistUser = User({
                    name,
                    email,
                    password
                });
                await alreadyExistUser.save();

                // generate the token and set the token in Redis
                var token = await jwtHandlerRedis.generateToken(alreadyExistUser.id);
                return res.json({ token });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json("Server error");
        }
    });

route.post('/login', [check('email', "Please enter your valid email").isEmail(),
check('password', "Use a strong password with 6 or more chanracter").exists(),
], async (req, res) => {
    var { email, password } = req.body;
    // to validate data
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ 'errors': error.array() });
    }
    try {
        var userHaveLogin = await User.findOne({ email: email });
        if (!userHaveLogin) {
            return res.status(400).json({ "errors": [{ msg: "Invalid Credentials!" }] });
        }
        const isMatch = await bcrypt.compare(password, userHaveLogin.password);
        if (!isMatch) return res.status(400).json({ "errors": [{ msg: "Invalid Credentials!" }] });

        // if valid user is present 
        // generate the token and set in Redis
        var token = await jwtHandlerRedis.generateToken(userHaveLogin.id);
        return res.json({ token });
    } catch (err) {
        console.error(err);
        return res.status(500).json("Server error");
    }
});

// authChecker is one private where check the token; If token is in it is logout.
route.get("/logout", authChecker, async (req, res) => {
    jwtHandlerRedis.deleteToken(req.user.jti);
    res.json({ msg: "Logout Successful!" });
});

// authChecker is one private where check the token; If token is in it is goes to profile or show the detail.
route.get('/', authChecker, async (req, res) => {
    try {
        const userData = await User.findById(req.user.id).select('-password');
        res.status(200).json(userData);
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: "Invalid Token!" });
    }
})


module.exports = route;