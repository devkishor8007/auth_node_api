const express = require('express');
const route = express.Router();
const user = require('../model/user_account');

route.get('/', async (req, res) => {
    var getUser = await user.find();
    if (getUser) return res.status(200).send(getUser);
    return res.status(400).send("error");

});

route.post('/signup', async (req, res) => {
    try {
        var sign = user({
            nameUser: req.body.nameUser,
            email: req.body.email,
            password: req.body.password,
        });

        var dataSign = await sign.save();
        if (dataSign) return res.status(200).json({ token: "987654321" });
        return res.status(400).send("error");
    } catch (e) {
        res.send("Insert the name, email and password properly!");
    }
});

route.post('/login', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    try {
        var login = await user.findOne({ email: email });
        if (login.password == password) return res.status(200).json({ token: "987654321" });
        return res.status(400).send("error");
    } catch (e) {
        res.send("check your email and password properly!");
    }
});

route.delete('/delete/:id', async (req, res) => {
    var id = req.params.id;
    try {
        var deleteID = await user.findByIdAndDelete(id);
        if (deleteID) return res.status(200).send("User Delete");
        return res.status(400).send("error");
    } catch (e) {
        res.send("we can delete through user Id");
    }
});

module.exports = route;