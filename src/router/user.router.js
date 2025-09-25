const expres = require('express');
const { signup, login } = require('../controller/user.controller');

const router = expres.Router()
router.post("/signup", signup)
router.post("/login", login)
// router.patch("/:id", signup)
// router.delete("/:id", signup)



module.exports = router;