const expres = require('express');
const router = expres.Router();
const userRouter = require('./user.router');
const productRouter = require('./product.router');
const bannerRouter = require('./banner.router');
const categoryRouter = require('./category');
const routers = [
    {
        path: '/user',
        route: userRouter
    },
    {
        path: '/test',
        route: (req, res) => {
            console.log("test route")
            res.send("test route")
        }
    },
    {
        path: '/product',
        route: productRouter
    },
    {
        path: '/banner',
        route: bannerRouter
    },
    {
        path: '/category',
        route: categoryRouter
    }
]


routers.map((route) => {
    router.use(route.path, route.route)
})


module.exports = router;