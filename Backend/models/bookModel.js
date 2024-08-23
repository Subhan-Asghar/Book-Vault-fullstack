const mongoose = require('mongoose');

 const userSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        index:true,
        required:true
    },

    password:{
        type:String,
        required:true

    }
  })
  const users =mongoose.model('users',userSchema)
  
  module.exports =users