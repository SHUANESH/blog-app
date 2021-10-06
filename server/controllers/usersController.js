const User = require('../models/UserModel');
const Post = require('../models/PostModel');
const bcrypt = require('bcrypt');

const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { password, ...updateUserInfo } = updateUser._doc;
      res.status(200).json({ massage: "update success!", date: updateUserInfo });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("you can only update your account");
  }
};
const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {

    try{
          const user = await User.findById(req.params.id)
    try {
        await User.findByIdAndDelete(req.params.id)
        await Post.deleteMany({username:user.username})

      res.status(200).json({ massage: "user delete success!"});
    } catch (error) {
      res.status(500).json(error);
    }
    }catch(error){
        res.status(404).json({massage:"user not found"});
    }

  } else {
    res.status(401).json({massage:"you can only delete your account"});
  }
};
const getUser = async (req, res) => {
  try{
    const user = await User.findById(req.params.id)
    const {password, ...userInfo} = user._doc;
    res.status(200).json({massage:"det user success!", data:userInfo});
  }catch(error){
      res.status(404).json({massage:"" , error:error})
  }
};
module.exports = {
  updateUser,
  deleteUser,
  getUser,
};
