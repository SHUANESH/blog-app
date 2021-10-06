const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');


// get category 
router.get("/" , categoriesController.getCategory)

// post category 
router.post("/" , categoriesController.creatCategory)
module.exports = router;