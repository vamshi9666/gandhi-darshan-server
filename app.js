const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config() //loads .env file into process.env mongoose.connect(process.env.DB_URL);
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')

mongoose.connect(process.env.DB_URL)

const connection = mongoose.connection;
connection.on('open',()=>{
	console.log(" database connected")
})
connection.on('error',()=>{
	console.log("error in connecting to database")
})
//middleswares
const auth = require('./middlewares/auth')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
const eventRoutes = require('./routes/event')

app.use('/event',eventRoutes)
app.get('/',(req,res,next)=>{
  res.send(`<h2>Hello </h2>`)
})

module.exports = app
