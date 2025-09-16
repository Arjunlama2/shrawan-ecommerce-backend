const mongoose = require("mongoose")
const Banner = require("../model/Banner")
const deleteImage = require("../utils/deleteImage")

const crateBanner = async (req, res,next) => {
    try {
// validate the data
        const banner = await Banner.create(req.body)
        res.status(201).json({
            status: "success",
            data: banner
        })

    }
    catch (err) {
        if (req.file) {

            deleteImage(req.body.image)
        }

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


const deleteBanner = async (req, res, next) => {
    try {
        const { id } = req.params
        let bannerId=new mongoose.Types.ObjectId(id)
        const banner = await Banner.findByIdAndDelete(bannerId)
        res.status(200).json({
            status: "success",
            message: "Banner deleted successfully"
        })
    }
catch (err) {
    next(err)
}}


const updateBanner = async (req, res, next) => {
    try {
        const { id } = req.params
        let bannerId=new mongoose.Types.ObjectId(id)
        const banner = await Banner.findByIdAndUpdate(bannerId, req.body)
        res.status(200).json({
            status: "success",  
            data: banner    
        })
    }
    catch (err) {   
        if(req.file){
            deleteImage(req.body.image)
        }
        next(err)
    }
}
module.exports = { crateBanner, getBnners ,deleteBanner, updateBanner}    