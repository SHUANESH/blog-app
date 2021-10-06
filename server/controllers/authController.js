const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

const registrarUser = async(req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);  
    const hashedPass = await bcrypt.hash(req.body.password,salt)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json({ massage: "registrar success!", data: user });
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginUser = async(req,res)=>{
    try{
      const user = await User.findOne({username:req.body.username})
      !user && res.status(400).json("Wrong credentials!");

      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials! Password does not match");

      const {password, ...userInfo} = user._doc;
      res.status(200).json({ massage: "login success!", data: userInfo });
    }catch(error){
        res.status(500).json(error);
    }
}
module.exports = {
  registrarUser,
  loginUser
};
