// const mongoose = require('mongoose');
import mongoose from 'mongoose';

//define product schema
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter product name"]
    },
    quantity:{
        type: Number,
        required: true,
        default: 0
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: false
    }
},
{
    timestamps: true
})

//create product model
const Product = mongoose.model('Product', productSchema);
// module.exports = Product;

export default Product;