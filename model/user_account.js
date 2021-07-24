const mongoose = require("mongoose");

const accountUser = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

//change _id key to id only
accountUser.virtual('id').get(function () {
    return this._id.toHexString();
});

accountUser.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model("account", accountUser);