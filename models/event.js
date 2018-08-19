const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const autoIncrement = require('mongoose-auto-increment');
const  connection = mongoose.createConnection(process.env.DB_URL);
autoIncrement.initialize(connection);

const eventSchema = mongoose.Schema({
    _id :{
      type:Number
    },
    name:{
      type:String,
      required:true
    },
    date:{
      type:Date,
      required:true
    },
    venue:{
      type:String,
    }
})

eventSchema.plugin(autoIncrement.plugin, 'event');

module.exports = mongoose.model('event',eventSchema);
