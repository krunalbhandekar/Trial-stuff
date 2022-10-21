const express=require("express")
const nodemailer = require('nodemailer');
const multer = require("multer");
const fs = require("fs");
const birthdayroute=express.Router()
require('dotenv').config()


const BirthdayModel=require("../models/birthdaymodels")

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// get all info
birthdayroute.get("/all",async(req,res)=>{
  let data=await BirthdayModel.find()
  return res.send({"data":data})
})

// get current day birthday
birthdayroute.get("/current",async(req,res)=>{
  let fulldate=new Date()
  let month=+fulldate.getUTCMonth();
  let year=+fulldate.getUTCFullYear()
  let date=+fulldate.getUTCDate()
  let currentdate=year+"-"+(month+1)+"-"+date
  
  let data=await BirthdayModel.find({birth_date:currentdate})
  return res.send({"data":data})
})

// add friends data

birthdayroute.post("/add",async(req,res)=>{
 
  const {first_name,last_name,birth_date,mobile_no,email,description}=req.body
  let first=first_name[0].toUpperCase() + first_name.slice(1);
  let last=last_name[0].toUpperCase() + last_name.slice(1);
 
  let friend=await BirthdayModel.findOne({first_name:first,last_name:last})
  
  if(!friend){
    const data=new BirthdayModel({first_name:first,last_name:last,birth_date,mobile_no,email,description})
  await data.save()
  return res.send({"message":"info added succesfully",info:data})
  }else{
  return res.send({"message":"This Friends info already exists"})
  }
  
})

// send birthday email

birthdayroute.post("/gmailer",async(req,res)=>{
    const {email}=req.body

    let data=await BirthdayModel.findOne({email})
    let first_name=data.first_name
    let last_name=data.last_name

    let first=first_name[0].toUpperCase() + first_name.slice(1);
    let last=last_name[0].toUpperCase() + last_name.slice(1);


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: process.env.USER,
  to: email,
  subject: 'Birthday wish',
  text: `Hi ${first+" "+last},
          Happy Birthday To You.`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

    res.send({"message":"Email send"})

})

module.exports=birthdayroute