const express = require('express');
const questionController = require('./../controllers/questionController');

const router = express.Router();

router.get('/getQuestions', questionController.getQuestions);
router.post('/createQuestion', questionController.createQuestion);

module.exports = router;
