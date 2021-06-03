const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModal = require("../model/users");
const signin = async (req, res) => {
  const { email, password } = req.body;
  if (!req.body.id) {
    try {
      const oldUser = await UserModal.findOne({ email });
      
      if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
      const isPasswordCorrect = await bcrypt.compare(
        password,
        oldUser.password
      );
      console.log(isPasswordCorrect);
      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Invalid credentials" });

      const token = jwt.sign(
        { email: oldUser.email, id: oldUser._id }, "test",
        { expiresIn: "1h" }
      );
      console.log(token);
      res.status(200).json({ result: oldUser, token });
    } catch (err) {
      console.log(err); 
      res.status(404).json({ message: "Something went wrong , Please try again !!" });
    }
  } else {
    const googleId = req.body.id;
    let token = req.body.token;
    console.log(googleId);
    const result = await UserModal.findOne({ id: googleId });
    console.log({ result });
    if(!result){
      return res.status(400).json({ message: "Something went wrong , Please try again !!" }); 
    }
    res.status(200).json({ result, token });
  }
};
const signup = async (req, res) => {
  console.log(req.body);
  const { fullname, email, password, username, pic } = req.body;
  try {
   
    if (password) {
      const oldUser = await UserModal.findOne({
        $or: [{ username: username }, {  email:  email }]});
      console.log(oldUser);
      if (oldUser)
        return res.status(400).json({ message: "User already exists" });
      const hashedPassword = await bcrypt.hash(password, 12);
      console.log(hashedPassword);
      let result = await UserModal.create({
        email,  
        fullname,
        username,
        pic,
        password: hashedPassword,
      });
      if (oldUser == null) {
        if (password) {
          const token = jwt.sign(
            { email: result.email, id: result._id },
            "test",
            { expiresIn: "1h" }
          );
          console.log(token);
          res.status(201).json({ result, token });
        }
      }
    } else {
      try {
        const oldUser = await UserModal.findOne({email:email}); 
        if (oldUser)
        return res.status(400).json({ message: "User already exists" });
        let ress = await new UserModal({ email, fullname, id: req.body.id });
        const result = await ress.save();
        console.log(result);
        let token = req.body.token;
        res.status(201).json({ result, token });

      } catch (err) {
        console.log(err);
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

const follow = async (req, res) => {
  console.log(req.body);
  
  const userid = req.body.userid;
  console.log(userid);

  try {
    const post = await UserModal.findById(req.body.followId);
    console.log(post); 
    const index = post.followers.findIndex((id) => id === String(userid));
    console.log(index); 
    if(index===-1){
    const followers = await UserModal.findByIdAndUpdate(
      req.body.followId,
      { $push: { followers: userid } },
      { new: true }
    );
    const following = await UserModal.findByIdAndUpdate(
      userid,
      { $push: { following: req.body.followId } },
      { new: true }
    );
    res.status(201).json({ followers, following });
    }
  } catch (err) {
    res.status(401).json({ message: "something went wrong" });
    console.log(err);
  }
};
const unfollow = async (req, res) => {
  console.log(req.body);
  const userid = req.body.userid;
  console.log(userid);

  try {
    const followers = await UserModal.findByIdAndUpdate(
      req.body.unfollowId,  
      { $pull: { followers: userid } },
      { new: true }
    );
    const following = await UserModal.findByIdAndUpdate(
      userid,
      { $pull: { following: req.body.unfollowId } },
      { new: true }
    );
    console.log(following, followers);
    res.status(201).json({ followers, following });
  } catch (err) {
    res.status(401).json({ message: "something went wrong" });
    console.log(err);
  }
};

const updateprofile = async (req, res) => {
  const { id } = req.params;
  const { fullname, username, pic } = req.body;
  try {
    const updatedPost = { fullname, username, pic };
    await UserModal.findByIdAndUpdate(id, updatedPost, { new: true });
    console.log(updatedPost);
    res.json(updatedPost);  
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "can not update the profile" });
  }
};
module.exports = { signin, signup, follow, unfollow, updateprofile };
