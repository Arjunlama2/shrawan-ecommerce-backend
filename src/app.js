const express = require('express');
const { handlerError } = require('./middleware/handleError');
const app = express();
const router = require('./router/index');

app.get("/", (req, res) => {
    res.send("API is running");
})
app.use("/api/v1", router);
app.use(handlerError)
module.exports = app;