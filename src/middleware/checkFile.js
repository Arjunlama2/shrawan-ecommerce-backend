const  path  = require("path");


const checkFile=(req, res, next) => {
   
    if (req.file) {
      req.body.image = path.join('/uploads', req.file.filename);
        next()
    } else {
       next()
    }
}
module.exports={checkFile};