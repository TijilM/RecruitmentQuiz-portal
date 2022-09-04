const User = require('./../models/userModel');

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(400).json({
        status: 'failed',
        error: 'No user matching that id found',
      });
      return next();
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
