const mongoose = require("mongoose");

const accountUser = mongoose.Schema({
    nameUser: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

//change _id key to id only
accountUser.virtual('id').get(function () {
    return this._id.toHexString();
});

accountUser.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model("AccountUser", accountUser);