let redis = require("redis");
let JWTR = require("jwt-redis").default;
let redisClient = redis.createClient();
let jwtr = new JWTR(redisClient);

//generate the token through user id
module.exports.generateToken = async (id) => {
  let token = await jwtr.sign({ id }, process.env.SECRET, { expiresIn: "1d" });
  return token;
};

//verify the token through token
module.exports.verifyToken = (token) => {
  return jwtr.verify(token, process.env.SECRET);
};

//delte the token through dlt
module.exports.deleteToken = (jti) => {
  return jwtr.destroy(jti);
};
