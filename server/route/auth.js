const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')


//registrar
router.post('/registrar', authController.registrarUser);

//login
router.post('/login', authController.loginUser);
module.exports = router;