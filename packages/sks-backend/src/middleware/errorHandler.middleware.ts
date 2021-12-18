import { ERROR_CODES } from '../constants/error-codes';

// eslint-disable-next-line max-params
export const errorHandler = (err, req, res, next) => {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || ERROR_CODES.INTERNAL_SERVER_ERROR);
   res.render('error');
};
