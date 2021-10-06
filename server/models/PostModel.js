const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
   title:{
       type:String,
       require:true,
       unique:true
   },
   description:{
    type:String,
    require:true,
   },
   img:{
    type:String,
    require:false,
   },
   username:{
    type:String,
    require:true
   },
   categories:{
       type:Array

   }
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;