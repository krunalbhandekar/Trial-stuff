const express=require("express")
const dbConnect=require("./dbConnect")
const movieRoutes=require("./routes/movies")
const cors = require("cors");
const app = express();
require('dotenv').config()

dbConnect();

app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

app.get("/",(req,res)=>{
    res.send("Home Page")
})

const port = process.env.PORT ;
app.listen(port, () => console.log(`Listening on port ${port}...`));