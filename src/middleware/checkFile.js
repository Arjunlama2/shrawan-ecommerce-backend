const checkFile=(req, res, next) => {
    if (req.file) {
        req.body.image = req.file.path
        next()
    } else {
        res.status(400).json({ message: "Image file is required" })
    }
}
module.exports={checkFile};