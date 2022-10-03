const express=require("express")
const cors =require("cors")
const app=express()
require("dotenv").config
const connection=require("./config/config")
const sturoutes=require("./routes/studentroutes")

app.use(express.json())


app.use("/",sturoutes)

app.get("/",(req,res)=>{
    res.send("Home Page...")
})

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("db connected");
    }
    catch(err){
        console.log(err);
    }
    console.log(`db connect at ${process.env.PORT}`);
})
