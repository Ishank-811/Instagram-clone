const mongoose = require("mongoose"); 

const mongoconn=async()=>{
    try{
 mongoose.connect("mongodb+srv://instagram:h2318c@cluster0.onm77.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser:true , 
useUnifiedTopology:true , useCreateIndex:true , useFindAndModify:false})
    console.log(`connection is sucessfull`); 
}catch(e){
    console.log(e); 
}
};
module.exports  = mongoconn; 