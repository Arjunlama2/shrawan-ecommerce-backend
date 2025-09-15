const mongoose = require('mongoose');
const bannerSchema = new mongoose.Schema({
    image: {    
        type: String,
        required: [true, "Image is required"]
    },
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    discount:{
        type: String,
    },
    link:{
        type: String,
    },
    subtitle:{
        type: String,
        

    }


});

module.exports = mongoose.model('Banner', bannerSchema);