const mongoose = require('mongoose');
const createError = require('http-errors');

const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(createError(400, 'Invalid ID format')); // Changed from 404 to 400 to reflect a bad request
  }
  next();
};

module.exports = validateObjectId;
