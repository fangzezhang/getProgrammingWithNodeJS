/*
* 通过 app.use() 可以定义中间件(middleware)，创建一个每次请求都执行的路由，
* 匹配 URL 地址之前运行自己的代码，直到调用 next();
* */
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.info(req.socket.remoteAddress);  // 1.先执行, 查看请求 IP
  next();  // 必须调用 next()
});

app.use('/items', (req, res, next) => {
  console.info('use items: ');
  console.info(req.uri);
  next();
});

app.get('/', (req, res) => {
  res.send('123');
});

app.get('/items/:variable', (req, res) => {
  console.info(req.params);  // 2.后执行
  res.send(req.params.variable);
});

app.listen(3000);
