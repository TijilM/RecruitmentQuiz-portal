// const catchAsync = require('./../Utils/catchAsync');
// const AppError = require('./../Utils/appError');
const User = require('./../models/userModel');

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getUserProfile = async (req, res, next) => {
  try {
    console.log('RECEIVED');
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(new AppError('No user found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      error: err.message,
    });
  }
};
