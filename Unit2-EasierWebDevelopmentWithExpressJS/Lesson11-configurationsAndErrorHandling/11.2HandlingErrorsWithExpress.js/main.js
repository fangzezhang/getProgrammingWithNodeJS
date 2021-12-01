const express = require('express');
const app = express();

const errorController = require('./controllers/errorController.js');
const homeController = require('./controllers/homeController.js');

app.set('view engine', 'ejs');

app.get('/name/:myName', homeController.respondWithName);

// app.use(errorController.logErrors);  // 需要放在router后面，因为 app.use 中间件按顺序执行。

app.use(express.static('public'));  // 这样即可访问public文件夹中的静态资源：http://localhost:3000/500.html
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(3000);
console.info('http://localhost:3000');
