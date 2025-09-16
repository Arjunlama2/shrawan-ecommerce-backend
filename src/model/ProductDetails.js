const mongoose = require("mongoose");
const productDetailSchema = new mongoose.Schema(
    {
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        description: { type: String, required: true },
        review: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        },
        rating: {
            type: Number,
        },
        colors: [
            {
                image: { type: String }, 
                title: { type: String, required: true }, // e.g. "Red Edition"
                stock: { type: Number, default: 1 },
                size: { type: [String] } // e.g. ["S", "M", "L"]
            },
        ],
        size: {
             type: [String] 

        },


    },

    { timestamps: true });

module.exports = mongoose.model("ProductDetail", productDetailSchema);