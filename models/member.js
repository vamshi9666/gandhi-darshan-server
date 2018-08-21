const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const autoIncrement = require('mongoose-auto-increment');
const  connection = mongoose.createConnection(process.env.DB_URL);
autoIncrement.initialize(connection);

const memberSchema = mongoose.Schema({
    _id :{
      type:Number
    },
    name:{
      type:String,
      required:true
    },
    age:{
      type:Number,
    },
    mobile:{
      type:Number,
    },
    email:{
      type:String,
      required:true
    }

})

memberSchema.plugin(autoIncrement.plugin, 'member');

module.exports = mongoose.model('member',memberSchema);
