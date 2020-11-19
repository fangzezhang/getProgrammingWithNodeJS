const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello express!')
})
  .listen(port, () => {
    console.info(`express server listening at ${port} port`)
  });
