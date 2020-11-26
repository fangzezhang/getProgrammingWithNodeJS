const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.info(req.params);
  console.info(req.body);
  console.info(req.url);
  console.info(req.query);
  res.send('hello express!');
})
  .listen(port, () => {
    console.info(`express server listening at localhost:${port}`)
  });
