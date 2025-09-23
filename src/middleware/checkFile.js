

const checkFile=(req, res, next) => {
    console.log(req.file);

    if (req.file) {
       
      req.body.image = req.file.path.split("uploads\\")[1];
        next()
    } else {
       next()
    }
}
module.exports={checkFile};