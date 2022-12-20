const mongoose = require("Mongoose")
require("dotenv").config()
const connectionString = process.env.MONGODBURI

mongoose.set('strictQuery', false)

mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useInifiedTopology: true}
    );

mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

module.exports.User = require('./user')
module.exports.Product = require('./product')