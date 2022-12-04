const express=require("express")
const http=require("http")
const {Server}=require("socket.io")
const app=express()

const httpServer=http.createServer(app)
const io=new Server(httpServer)

const history=[]

io.on("connection",(ws)=>{
    // console.log("got new connection");
    ws.emit("history",history)
    ws.broadcast.emit("newUser")
    //broadcast- sent event to everyone except self
    
    // newMessage is a custom event which can use in frontend in ws.emit
    ws.on("newMessage",(msg)=>{
        // console.log("Message received",msg);
        history.push(msg)
        io.emit("newMessage",msg)
        //broadcast
    })
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.sendFile((__dirname + "/public/index.html")) 
})
// app.use("/use",express.static("public"))
//both are same thing
httpServer.listen(8080,()=>{
    console.log("server start at 8080");
})