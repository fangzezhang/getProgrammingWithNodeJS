const port = 3001;
const http = require('http');
const httpStatus = require('http-status-codes');
const router = require('./router');
const contentTypes = require('./contentTypes');
const utils = require('./utils');

router.get('/', (req, res) => {  // register url
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile('views/index.html', res);
});

router.get('/contact', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile('views/contact.html', res);
});

router.get('/favicon.ico', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile('views/index.html', res);
});

router.post('/', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile('views/thanks.html', res);
});

/*http.createServer(((req, res) => {
  res.writeHead(301, {
    location: 'https://www.baidu.com'
  });
  res.end();
})).listen(port);*/
http.createServer(router.handle).listen(port);
console.info(`server is listening on port: ${port}`);
