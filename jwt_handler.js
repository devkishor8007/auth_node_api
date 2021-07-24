var redis = require('redis');
var JWTR = require('jwt-redis').default;
var redisClient = redis.createClient();
var jwtr = new JWTR(redisClient);

var secret = 'thisism26ysecreKISHOR62abctkeywhereiamH96andleDataBaseRedis';

//generate the token through user id
module.exports.generateToken = async (id) => {
    var token = await jwtr.sign({ id }, secret,
        { expiresIn: '1d' });
    return token;
}

//verify the token through token
module.exports.verifyToken = (token) => {
    return jwtr.verify(token, secret);
}

//delte the token through dlt
module.exports.deleteToken = (jti) => {
    return jwtr.destroy(jti);
}
