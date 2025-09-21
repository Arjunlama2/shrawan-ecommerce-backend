const express = require('express');
const { handlerError, errorConverter, errorHandler } = require('./middleware/handleError');
const app = express();
const router = require('./router/index');

app.get("/", (req, res) => {
    res.send("API is running");
})
app.use("/api/v1", router);
app.use(errorConverter)
app.use(errorHandler)
module.exports = app;