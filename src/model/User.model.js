const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: {
            validator: async function (value) {
                const found = await mongoose.models.User.findOne({ username: value });
                return !found;
            },
            message: "Username already taken"
        }
    },
    password: {
        type: String,

    },
    email: {
        type: String,
        validate: {
            validator: async function (value) {

                const found = await mongoose.models.User.findOne({ email: value });
                return !found;
            },
            message: "Email already exists"
        }


    },
    role: {
        type: String,
        enum: ["buyer", "seller", "superadmin"],
        default: "seller"
    },

})



const User = mongoose.model("User", userSchema)
module.exports = User