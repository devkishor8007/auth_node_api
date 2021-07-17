const express = require('express');
const app = express();
require('./db')

app.use(express.json());
app.use('/', require("./route/user_account"),);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server listening at the port ${port}`);
});