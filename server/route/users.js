const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

//update user
router.put("/:id", userController.updateUser);

//delete user
router.delete("/:id", userController.deleteUser);

//get user
router.get("/:id", userController.getUser);
module.exports = router;
