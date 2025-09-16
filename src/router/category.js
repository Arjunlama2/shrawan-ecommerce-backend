const expres = require('express');
const { getCategories, createCategory, getCategoryById, updateCategory, deleteCategory } = require('../controller/category');

const router = expres.Router();

router.route('/')
    .get(getCategories)
    .post(createCategory)// authenticateUser, authorizeAdmin,


router.route('/:id')
    .get(getCategoryById)
    .patch(updateCategory)// authenticateUser, authorizeAdmin,
    .delete(deleteCategory)// authenticateUser, authorizeAdmin,


module.exports = router;