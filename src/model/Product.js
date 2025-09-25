const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        productOf: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        title: { type: String, required: true },
        image: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },
        discountPrice: {
            type: Number
        },
        shortDescription: {
            type: String
        },

       
        stock: { type: Number, default: 1 }
    },

    { timestamps: true });

module.exports = mongoose.model("Product", productSchema);