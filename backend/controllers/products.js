const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')

// Checks if the user token created when logging in exists
function isAuthenticated(req,res,next) {
    if(req.headers.authorization) {
        next()
    } else {
        res.sendStatus(401)
    }
}

// Create Route - Works in Postman
router.post('/', isAuthenticated, async (req,res) => {
    const createdProduct = await db.Product.create(req.body)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    createdProduct.user = decoded.id
    createdProduct.save()
    res.json(createdProduct)
})

// Index - Works in Postman
// Populate grabs all of the information associated with the user ID stored in the user collection
router.get('/', async (req,res) => {
    const allProducts = await db.Product.find({}).populate('user')
    res.json(allProducts)
})

// Show Route - works in Postman
router.get('/:id', async (req,res) => {
    const foundProduct = await db.Product.findById(req.params.id).populate('user')
    res.json(foundProduct)
})

// Update Route - works in Postman
router.put('/:id/edit', async (req,res) => {
    const foundProduct = await db.Product.findById(req.params.id)
        const updatedProduct = await db.Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.json(updatedProduct)
    
})

// Delete route - works in Postman
router.delete('/:id', isAuthenticated, async (req,res) => {
    await db.Product.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})

module.exports = router
