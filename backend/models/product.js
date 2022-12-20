const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String},
    location: {type: String},
    price: {type: Number},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product 