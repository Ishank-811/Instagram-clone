const { Mongoose } = require("mongoose").Schema.ObjectId;
const postmessage = require("../model/create");
const user = require("../model/users");
var ObjectId = require("../model/users");

const getposts = async (req, res) => {
  try {
    const getpost = await postmessage.find().sort({_id:-1});
    res.status(201).json(getpost);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "error is fetching the data" });
  }
};

const createposts = async (req, res) => {
  const post = req.body;
 
  const newpost = new postmessage({ ...post, creator: req.userId });
  try {
 
    await newpost.save();
    res.status(200).json(newpost);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
const myprofile = async (req, res) => {
  const userid = req.userId;

  try {
    let profilepost = await postmessage.find({ creator: userid });
    res.status(201).json(profilepost);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "something went wrong" });
  }
};

const likeposts = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postmessage.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
      const likedPost = await postmessage.findByIdAndUpdate(
        id,
        { $push: { likes: req.userId } },
        { new: true }
      );
      res.status(201).json(likedPost);
    }
  } catch (err) {
    res.status(201).json({ message: "something went wrong" });
    console.log(err);
  }
};
const unlikeposts = async (req, res) => {
  const { id } = req.params;

  try {
    const unlikedPost = await postmessage.findByIdAndUpdate(
      id,
      { $pull: { likes: req.userId } },
      { new: true }
    );

    res.status(201).json(unlikedPost);
  } catch (err) {
    res.status(201).json({ message: "something went wrong" });
    console.log(err);
  }
};
const deleteposts = async (req,res)=>{
  const {id} = req.params ; 
 
  await postmessage.findByIdAndRemove(id) ; 
  res.json({message:"post deleted successully"}) ;

}
const comments = async (req, res) => {
  const { id } = req.params;

  try {
    const commenting = {
      text: req.body.comment,
      postedby: req.userId,
      name: req.body.name,
    };
  

    const comment = await postmessage.findByIdAndUpdate(
      id,
      { $push: { comments: commenting } },
      { new: true }
    );
 
    res.status(201).json(comment);
  } catch (err) {
    res.status(201).json({ message: "something went wrong" });
  
  }
};
const userprofile = async (req, res) => {
  const userid = req.params;


  var users;
  try {
    
    var profilepost = await postmessage.find({ creator: userid.id }).exec();
    // let users =  await user.find({$or: [{id: userid.id}, {"_id":ObjectId(userid.id)}]}) ;
    users = await user.find({ id: userid.id }).exec();
   

   
    if (users.length === 0) {
  
      users = await user.find({ _id: userid.id }).exec();
  
      res.status(201).json([profilepost, users]);
      return {
        users,
      };
    }
    res.status(201).json([profilepost, users]);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "something went wrong" });
  }
};

module.exports = {
  createposts,
  getposts,
  myprofile,
  likeposts,
  unlikeposts,
  comments,
  userprofile,
  deleteposts
};
