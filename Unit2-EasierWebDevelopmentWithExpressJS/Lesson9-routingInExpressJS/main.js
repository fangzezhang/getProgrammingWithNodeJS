const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());

app.post('/contact', (req, res) => {
  res.send('contact information submitted successfully.');
});

app.get('/items/:vegetable', (req, res) => {
  let veg = req.params.vegetable;
  res.cookie('test', 'this is test cookie', {domain: 'localhost', path: '/items/'});
  // res.cookie('test', 'this is test cookie');
  res.send(`this is the page for ${veg}`);
});

app.listen(port, () => {
  console.info(`open at http://localhost:${port}`);
});
