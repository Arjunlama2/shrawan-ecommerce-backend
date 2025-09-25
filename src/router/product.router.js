const expres = require('express');
const { createProduct, getProducts } = require('../controller/product.controller');
const { isAuthenticated, isSeller } = require('../middleware/auth');
const upload = require('../utils/multer');
const { checkFile } = require('../middleware/checkFile');


const router = expres.Router();

router.route('/')
    .get(getProducts) 
    .post(
        isAuthenticated,
        isSeller,
        upload.single('image'),
        checkFile,
        createProduct)

router.route('/:id')
// .get()
// .patch()
// .delete()

module.exports = router;