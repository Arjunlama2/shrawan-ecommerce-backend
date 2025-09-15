const Banner = require("../model/Banner")

const crateBanner = async (req, res) => {
    try {

        const banner = await Banner.create(req.body)
        res.status(201).json({
            status: "success",
            data: banner
        })

    }
    catch (err) {
        // delete image if error occurs
        next(err)

    }
}


const getBnners = async (req, res) => {
    try {
        const banners = await Banner.find()
        res.status(200).json({
            status: "success",
            data: banners
        })
    } catch (err) {
        next(err)
    }
}



module.exports = { crateBanner,getBnners}    