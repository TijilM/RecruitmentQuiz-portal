const express = require('express');
const answerController = require('./../controllers/answerController');

const router = express.Router();

router.post('/checkAnswer', answerController.checkAnswer);

module.exports = router;
