const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config() //loads .env file into process.env mongoose.connect(process.env.DB_URL);
const app = express()

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

app.get('/',(req,res,next)=>{
  res.send()
})

module.exports = app
