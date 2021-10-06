const User = require("../models/UserModel");
const Post = require("../models/PostModel");


const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json({ message: "create post success!", data: savedPost });
  } catch (error) {
    res.status(500).json({ message: "creat new post field", error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const postUpdate = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res
          .status(200)
          .json({ message: "update post success!", data: postUpdate });
      } catch (error) {
        res.status(500).json({ message: "field to update", error: error.message });
      }
    } else {
      res.status(401).json({ message: "you cen only update you account" });
    }
  } catch (error) {
    res.status(500).json({ message: "field to update", error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json({ message: "delete post success!", data: post });
      } catch (error) {
        res.status(500).json({ message: "field to delete", error: error.message });
      }
    } else {
      res.status(401).json({ message: "you cen only delete you account" });
    }
  } catch (error) {
    res.status(500).json({ message: "field to delete", error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({ message: "get post success!", data: post });
  } catch (error) {
    res.status(500).json({ message: "get post filed!", error: error.message });
  }
};

const getAllPost = async (req, res) => {
  try {
    const username = req.query.user;
    const categoriesName = req.query.categories;

    let posts;
    if(username){
      posts = await Post.find({username:username})
    }
    else if(categoriesName){
      posts = await Post.find({categories:{$in:[categoriesName]}})
    }
    else{
      posts = await Post.find()
    }
    res.status(200).json({message:"get all posts success!",data:posts})

  } catch (error) {
    res.status(500).json({ message: "get post filed!", error: error.message });
  }
};

module.exports = {
  updatePost,
  getPost,
  deletePost,
  createPost,
  getAllPost
};
