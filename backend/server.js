// Dependencies

const express = require('express')
const app = express()

const cors = require('cors')
require('./models')
require('dotenv').config()
const PORT = process.env.PORT

const userCtrl = require('./controllers/users')
const productCtrl = require('./controllers/products')


// Middleware

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// routes

app.use('/user'. userCtrl)
app.use('/product', productCtrl)

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})