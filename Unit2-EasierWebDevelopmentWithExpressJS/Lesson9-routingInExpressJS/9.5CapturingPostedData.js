const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  console.info(req.query);
  res.send('132456')
});

app.post('/', (req, res) => {
  console.info(req.body);
  console.info(req.body.name);
  res.send('POST successful!');
});

app.listen(3000);
