const express=require("express")
const sturoutes=express.Router()

const studentmodel=require("../models/student")

sturoutes.get("/student",async(req,res)=>{
    try{
        const gender=req.query.gender || ["male","female"]
        const field=req.query.sort || "_id";
        const order=req.query.order || "asc";
        const search =req.query.search || "";
        const page = parseInt(req.query.page) -1 || 0 
        const limit = parseInt(req.query.limit) || 5 
        

        console.log(req.query,"q")
        console.log(req.url,"u")
        // console.log(page,limit)

        let data= await studentmodel.find({name:{$regex:search, $options:"i"}}).where("gender").in(gender).sort([[field,order]]).skip(page * limit ).limit(limit)

        const total=await studentmodel.countDocuments({gender,name: { $regex: search, $options: "i" }})

        const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			gender,
			data,
		};

        return res.send(response)
    }
    catch(err){
       return res.send({"err":err})
    }
    
})

sturoutes.post("/add",async(req,res)=>{
    const {name,age,roll,gender}=req.body
  

    const newstu=new studentmodel({
        name,age,roll,gender
    })
    await newstu.save()
    return res.send({message:"student add",newstu})
})

module.exports=sturoutes