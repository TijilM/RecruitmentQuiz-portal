const Question = require('./../models/questionModel');

// ROUTE TO CREATE A QUESTION
exports.createQuestion = async (req, res, next) => {
  try {
    console.log('Question is being created');
    const newQuestion = await Question.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        newQuestion,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      err: err.message,
    });
  }
};

exports.getQuestions = async (req, res, next) => {
  // GET ALL QUESTIONS
  const easy = Question.find({ difficulty: 'easy' });
  const medium = Question.find({ difficulty: 'medium' });
  const hard = Question.find({ difficulty: 'hard' });

  const [easyQuestions, mediumQuestions, hardQuestions] = await Promise.all([
    easy,
    medium,
    hard,
  ]);

  const questions = [
    easyQuestions.sort((a, b) => Math.random() - 0.5).slice(0, 4),
    mediumQuestions.sort((a, b) => Math.random() - 0.5).slice(0, 3),
    hardQuestions.sort((a, b) => Math.random() - 0.5).slice(0, 3),
  ];

  res.status(200).json({
    status: 'success',
    data: {
      questions,
    },
  });
};
