import { ERROR_CODES } from '../constants/error-codes';

/* eslint-disable @typescript-eslint/no-var-requires */
const createError = require('http-errors');

// catch 404 and forward to error handler
export const notFoundHandler = (req, res, next) => {
   next(createError(ERROR_CODES.NOT_FOUND));
};
