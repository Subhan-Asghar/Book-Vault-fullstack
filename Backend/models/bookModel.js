const mongoose = require('mongoose');

 const userSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true
    },
    description:{
        type:String,   
    },
    year:{
        type:String,
        required:true
    }
  })
  const book =mongoose.model('book',userSchema)
  
  module.exports =book