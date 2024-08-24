const express =require('express')
const router=express.Router()
const book=require('../models/bookModel')


router.route('/book')
.get(async(req,res)=>{
    const result =await book.find()
    res.status(200).json({
        count:result.length,
        data:result
    })
})
.post((req,res)=>{
    const {title,author,year,description}=req.body;
    const body=req.body
    console.log("Body" ,body)
    book.create({ 
        title, 
        author,
        year,
        description

    })
    res.status(201).json({
        message:"Done"
    })
})
router.route('/book/:id')
.get(async(req,res)=>{
    const id=req.params.id
    const result =await book.findById(id)
    res.status(200).json({
        count:result.length,
        data:result
    })
})
.put(async(req,res)=>{
    const {title,author,year,description}=req.body
    const id=req.params.id
    const result =await book.findByIdAndUpdate(id,{title,author,year,description})
    if(result){
        res.status(200).json({
            message:"Updated"
        })
    }
})
.delete(async(req,res)=>{
    const id=req.params.id
    const result =await book.findByIdAndDelete(id)
    if(result){
        res.status(200).json({
            message:"Delete"
        })
    }
})
module.exports=router;