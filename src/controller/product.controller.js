const Product = require("../model/Product")
const joi = require("joi")
const deleteImage = require("../utils/deleteImage")
const { default: mongoose } = require("mongoose")

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        .populate("category")
        .populate("productOf", "-password -role -__v -createdAt -updatedAt")
        
        res.status(200).json({
            status: "success",
            data: products
        })
    } catch (err) {
        next(err)
    }   
}




const createProduct = async (req, res, next) => {
    try {
        console.log(req.user);
        const data = req.body
        data.productOf=new mongoose.Types.ObjectId(req.user._id)
        data.category=new mongoose.Types.ObjectId(req.body.category)
    console.log(data);
        const product = await Product.create(data)
        res.status(201).json({
            status: "success",
            data: product
        })

    } catch (err) {
        if (req.file) {
            deleteImage(req.file.path)
        }
        next(err)
    }
}




module.exports = {
    createProduct,
    getProducts
}