const handlerError = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error for testing purpose" });
}

module.exports = {handlerError};