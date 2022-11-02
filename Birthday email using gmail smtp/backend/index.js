const express=require("express")
const cors = require("cors")
const connection =require("./config/config")
const birthdayroute=require("./routes/birthdatRoutes")
const todoroute=require("./routes/todoRoutes")
const { log } = require("console")

const app=express()
app.use(express.json())
app.use(cors())

require('dotenv').config()
app.use("/",birthdayroute)
app.use("/todo",todoroute)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("db connected");
    }
    catch(err){
        console.log(err);
    }
    console.log(`db connect at 8080`);
})