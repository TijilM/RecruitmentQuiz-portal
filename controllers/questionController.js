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
  const easy = await Question.find({ difficulty: 'easy' });
  const medium = await Question.find({ difficulty: 'medium' });
  const hard = await Question.find({ difficulty: 'hard' });

  const questions = [
    easy.sort((a, b) => Math.random() - 0.5).slice(0, 1),
    medium.sort((a, b) => Math.random() - 0.5).slice(0, 1),
    hard.sort((a, b) => Math.random() - 0.5).slice(0, 1),
  ];

  res.status(200).json({
    status: 'success',
    data: {
      questions,
    },
  });
};
