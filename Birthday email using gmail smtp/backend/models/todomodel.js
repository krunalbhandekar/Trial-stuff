const mongoose=require("mongoose")

const todoschema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
})

const TodoModel=mongoose.model("todo",todoschema)

module.exports=TodoModel