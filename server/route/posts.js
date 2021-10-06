const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

//post a post
router.post("/", postsController.createPost);

//update post
router.put("/:id", postsController.updatePost);

//delete post
router.delete("/:id", postsController.deletePost);

//get post
router.get("/:id", postsController.getPost);

//get all post
router.get("/", postsController.getAllPost);
module.exports = router;