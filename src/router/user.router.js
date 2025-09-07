const expres = require('express');

const router = expres.Router();

router.route('/')
    .get((req, res) => {
        res.send("User route is working")
    })
    .post((req, res) => {
        res.send("User post route is working")
    })


router.route('/:id')
    .get((req, res) => {
        res.send(`User id is ${req.params.id}`)
    })
    .patch((req, res) => {
        res.send(`User id is ${req.params.id} and updated`)
    })
    .delete((req, res) => {
        res.send(`User id is ${req.params.id} and deleted`)
    })


module.exports = router;