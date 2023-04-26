const express= require("express") ;
const app = express() ;  
const cors  =require("cors") ; 
const dotenv = require("dotenv");
const conn = require("./config/conn"); 
dotenv.config({  path: "./config.env" });
console.log(process.env.PORT);  
const port =  8080 ;
conn() ; 
app.use(express.json({limit:"30mb"  , extended:true}) ) ; 
app.use(express.urlencoded({limit:"30mb"  , extended:false}) ) ; 
app.get("/", (req,res)=>{
    res.send("app is running 1"); 
})
app.use(cors()) ; 
app.use("/posts" , require("./routes/posts"))
app.use("/users" , require("./routes/users")) ; 
app.listen(port , ()=>{
    console.log(`listening at port number ${port}`) ; 
})