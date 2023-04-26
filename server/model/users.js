const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types ; 
  const userSchema =  mongoose.Schema({
  fullname: { type: String, required:  true },
  email: { type: String, required: true },
  username:{type:String } , 
  password: { type: String },
  id: { type: String },
  pic:{type:String},
  followers :{  type:[String],
    default:[]
  },
  following :{type:[String],
  default:[]
  }
});

const users= mongoose.model("User", userSchema);
module.exports = users ; 