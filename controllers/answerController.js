const User = require('./../models/userModel');
const Question = require('./../models/questionModel');
const AppError = require('./../utils/appError');

// FUNCTION TO FILTER OBJECT
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

// ROUTE TO CHECK WHETHER ANSWER IS CORRECT AND UPDATE POINTS ACCORDINGLY
exports.checkAnswer = async (req, res, next) => {
  try {
    // 1) Filtered out unwanted fields names that are not allowed to be updated
    const filteredBody = filterObj(req.body, 'questionId', 'option');

    // 2) Get questionId, option and User ID from request
    const { questionId, option } = req.body;
    const userId = req.params.id;
    if (!questionId || !option || !userId) {
      res.status(404).json({
        status: 'failed',
        err: 'No question ID , answer , or user ID was provided',
      });
      return next(
        new AppError('Please provide questionId , option , or userId!', 400)
      );
    }

    // Find question and user
    const question = await Question.findById(questionId);
    console.log(question);
    const user = await User.findById(userId);
    console.log(user);

    // In case no matching question and user exist
    if (!question) {
      res.status(404).json({
        status: 'failed',
        err: 'No question matching the questionId found',
      });
      return next(
        new AppError('No question matching the questionId was found!', 400)
      );
    }
    if (!user) {
      res.status(404).json({
        status: 'failed',
        err: 'No user matching the userId found',
      });
      return next(new AppError('No user matching the userId was found!', 400));
    }

    // Check if answer is correct
    if (question.answer === option) {
      const newScore = question.points + user.score;
      console.log(newScore);
      res.status(200).json({
        status: 'success',
        message: 'correct',
      });
      // Update user score
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          score: newScore,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log(updatedUser.score);
    } else {
      res.status(200).json({
        status: 'success',
        message: 'incorrect',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      err: err.message,
    });
  }
};
