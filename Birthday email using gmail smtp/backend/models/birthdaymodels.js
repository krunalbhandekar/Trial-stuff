const mongoose=require("mongoose")

const birthdayschema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    birth_date:{type:String,required:true},
    mobile_no:{type:Number,required:true},
    email:{type:String,required:true},
    description:{type:String,required:true}
})

const BirthdayModel=mongoose.model("birthday",birthdayschema)

module.exports=BirthdayModel