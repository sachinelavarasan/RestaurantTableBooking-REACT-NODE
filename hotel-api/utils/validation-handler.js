const { validationResult } = require('express-validator/check');

exports.validationHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      status: false,
      validationError: true,
      errors: errors.array()
    });
  } else next();
};
