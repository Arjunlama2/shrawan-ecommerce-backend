const expres = require('express');
const { crateBanner, getBnners, deleteBanner, updateBanner, } = require('../controller/banner');
const upload = require('../utils/multer');
const { checkFile } = require('../middleware/checkFile');


const router = expres.Router();

router.get("/", getBnners)

router.post("/", upload.single("image"), checkFile,//authenticateUser, authorizeAdmin,
    crateBanner)

router.delete("/:id",
    // authenticateUser, authorizeAdmin,

    deleteBanner
)


router.patch("/:id", upload.single("image"), checkFile,
    // authenticateUser, auhorizeAdmin,
    updateBanner
)

module.exports = router;