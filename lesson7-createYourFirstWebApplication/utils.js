const fs = require('fs');
const httpStatus = require('http-status-codes');
const contentTypes = require('./contentTypes');

module.exports = {
  getFile: (file, res) => {
    console.info(file);
    fs.readFile(`${__dirname}/${file}`, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end('there was an error serving content!');
      }
      res.end(data);
    })
  }
};
