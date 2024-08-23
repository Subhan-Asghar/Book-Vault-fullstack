const express =require('express')
const router=express.Router()
const users=require('../models/bookModel')
router.route('/')
.get((req,res)=>{
    res.send("Home Page")
})
router.route('/user')
.get(async(req,res)=>{
    const result =await users.find()
    res.send({
        count:result.length,
        data:result
    })
})
.post((req,res)=>{
    const {email,password}=req.body;
    const body=req.body
    console.log("Body" ,body)
    users.create({ 
        email, 
        password

    })
    res.send("Done")
})
router.route('/user/:id')
.get(async(req,res)=>{
    const id=req.params.id
    const result =await users.findById(id)
    res.send({
        count:result.length,
        data:result
    })
})
.put(async(req,res)=>{
    const {email,password}=req.body
    const id=req.params.id
    const result =await users.findByIdAndUpdate(id,{email,password})
    if(result){
        res.status(200).json({
            message:"Updated"
        })
    }
})
.delete(async(req,res)=>{
    const id=req.params.id
    const result =await users.findByIdAndDelete(id)
    if(result){
        res.status(200).json({
            message:"Delete"
        })
    }
})
module.exports=router;