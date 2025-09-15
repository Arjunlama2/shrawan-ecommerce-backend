const expres = require('express');
const { crateBanner, getBnners } = require('../controller/banner');
const upload = require('../utils/multer');
const { checkFile } = require('../middleware/checkFile');


const router = expres.Router();

router.get("/", getBnners)

router.post("/", upload.single("image"), checkFile,
    crateBanner)

module.exports = router;