const jwtHandlerRedis = require('../jwt_handler');

module.exports = async function (req, res, next) {
    //get the token
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: "No token, Auth Denied!" });
    }
    try {
        var decoded = await jwtHandlerRedis.verifyToken(token);
        req.user = decoded; // anytime if we need this decoded we use req.user
        next();
    } catch (e) {
        return res.status(401).json({ msg: "Invalid Token!" });
    }
}