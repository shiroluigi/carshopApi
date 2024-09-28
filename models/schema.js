const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name must be provided']
    },
    price:{
        type:Number,
        required:[true,'product price must be provided']
    },
    featured: {
        type: Boolean,
        default:false
    },
    rating: {
        type:Number,
        default:0
    },
    created: {
        type:Date,
        default:Date.now()
    },
    company: {
        type:String,
        enum : {
            values: ["toyota", "honda", "daihatsu", "nissan", "suzuki", "mazda", "mitsubishi", "subaru", "isuzu", "hino", "kawasaki", "yamaha", "mitsuoka"],
            message: '{VALUE} is not supported'
        }
    }
})


module.exports = mongoose.model('Product',productSchema)