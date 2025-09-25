const express = require('express');
const path = require('path');
const { handlerError, errorConverter, errorHandler } = require('./middleware/handleError');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = require('./router/index');
app.get("/", (req, res) => {
    res.send("API is running");
})

const uploadDir = path.join(__dirname, '../uploads');


app.use('/uploads', express.static(uploadDir));
app.use("/api/v1", router);

app.use(errorConverter)
app.use(errorHandler)
module.exports = app;