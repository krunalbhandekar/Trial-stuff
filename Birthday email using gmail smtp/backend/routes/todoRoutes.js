const express=require("express")
const todoroute=express.Router()
require('dotenv').config()

const TodoModel = require("../models/todomodel")



//get all todo
todoroute.get("/all",async(req,res)=>{
  let data=await TodoModel.find()
  return res.send({"data":data})
})

//add todo

todoroute.post("/add",async(req,res)=>{
 
  const {title,description}=req.body
  const data=new TodoModel({title,description})
 
  await data.save()
  return res.send({"message":"Todo added succesfully",data:data})
})

//delete todo

todoroute.delete("/:id",async(req,res)=>{
 
  await TodoModel.findByIdAndDelete({_id:req.params.id})

  return res.send({"message":"Todo deleted succesfully"})
})

//edit todo

todoroute.put("/:id",async(req,res)=>{
    const {title,description}=req.body
 
  const data= await TodoModel.findByIdAndUpdate({_id:req.params.id},{title,description},{new:true})

  return res.send({"message":"Todo updated succesfully",data:data})
})

module.exports=todoroute
