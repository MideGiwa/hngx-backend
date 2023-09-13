const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  // Initialize a custom error object with default values
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong. Please try again later.',
  };

  // Handle validation errors
  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(', ');
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  // Handle duplicate key errors
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for the ${Object.keys(
      err.keyValue
    )} field. Please choose another value.`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  // Handle cast errors
  if (err.name === 'CastError') {
    customError.msg = `No item found with the ID: ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }

  // Return the custom error response
  return res.status(customError.statusCode).json({ error: customError.msg });
};

module.exports = errorHandler;
