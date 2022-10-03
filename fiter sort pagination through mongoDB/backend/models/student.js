const mongoose=require("mongoose")

const studentschema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    roll:{type:Number},
    gender:{type:String}
})

const studentmodel=mongoose.model("studata",studentschema)

module.exports=studentmodel