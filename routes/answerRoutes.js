const express = require('express');
const authController = require('./../controllers/authController');
const answerController = require('./../controllers/answerController');
const userController = require('./../controllers/userController');

const router = express.Router();

// ALL ROUTES BELOW WILL REQUIRE THE USER TO BE LOGGED IN
router.use(authController.protect);

router.post('/checkAnswer', userController.getMe, answerController.checkAnswer);

module.exports = router;
