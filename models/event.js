const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const autoIncrement = require('mongoose-auto-increment');
const  connection = mongoose.createConnection(process.env.DB_URL);
autoIncrement.initialize(connection);

const eventSchema = mongoose.Schema({

})
