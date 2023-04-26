const mongoose = require("mongoose"); 
const dotenv = require("dotenv");
dotenv.config({  path: "../config.env" });
const mongoconn=async()=>{
    try{
        console.log(process.env.DB_PASSWORD)
 mongoose.connect(`mongodb+srv://instagram:h2318c@cluster0.onm77.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser:true , 
useUnifiedTopology:true , useCreateIndex:true , useFindAndModify:false})
    console.log(`connection is sucessfull`); 
}catch(e){ 
    console.log(e); 
}
};
module.exports  = mongoconn; 