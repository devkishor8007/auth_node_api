const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDb is connecting");
}).catch((e) => {
    console.log("MongoDb is not connecting");
});