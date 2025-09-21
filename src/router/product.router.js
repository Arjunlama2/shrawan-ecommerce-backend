const expres=require('express');
const { createProduct } = require('../controller/product.controller');


const router=expres.Router();

router.route('/')
// .get() 
.post(createProduct)

router.route('/:id')
// .get()
// .patch()
// .delete()

module.exports=router;