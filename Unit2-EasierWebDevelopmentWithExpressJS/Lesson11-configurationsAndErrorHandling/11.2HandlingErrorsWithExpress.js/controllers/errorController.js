const httpStatus = require('http-status-codes');

module.exports = {
  logErrors(error, req, res, next) {
    console.error('error.stack: ');
    console.error(error);
    next(error);
  },

  respondNoResourceFound(req, res, next) {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.sendFile('./public/404.html', {
      root: './'
    });
    // res.send(`${errorCode} | The page does not exist!`);
  },

  respondInternalError(error, req, res, next) {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.info(`Error occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, out application is experiencing a problem!`)
  },
};
