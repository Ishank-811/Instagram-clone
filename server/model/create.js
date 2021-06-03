const mongoose  = require("mongoose"); 
const {ObjectId} = mongoose.Schema.Types
const postschema  = mongoose.Schema({
    title:String,
    message:String,
    name: String,
    creator:String, 
    image: String ,         
    likes:{
        type:[String] , 
        default:[] , 
    }  ,
    createdAt : {
        type : Date,        
        default : new Date()
    } , 
    comments :{
        text :{type:String},
        name:{type:String} , 
        postedby:{type:String} ,
       default:{}
    },
    
        versionKey: false // You should be aware of the outcome after set to false
    

    
})


const postmessage = mongoose.model("Postmessage" , postschema) ; 
module.exports = postmessage ; 