const Question = require('./../models/questionModel');

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
