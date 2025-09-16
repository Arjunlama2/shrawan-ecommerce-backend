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
        discountedPrice: {
            type: Number
        },
        shortDescription: {
            type: String
        },
        video: {
            type: String
        },

        discountId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Discount"
        },
        individualDiscountPercentage: {
            type: Number,
        },
        stock: { type: Number, default: 1 }
    },

    { timestamps: true });

module.exports = mongoose.model("Product", productSchema);