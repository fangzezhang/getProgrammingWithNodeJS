const express = require('express');
const app = express();
const homeController = require('./controllers/homeController.js');
const loginController = require('./controllers/loginController.js');

app.use(express.urlencoded({
  extended: false,
}));

app.get('/items/:vegetable', homeController.sendReqParam);
app.post('/', loginController.login);

app.listen(3000);
