const express = require('express');
const app = express();

const homeController = require('./controllers/hoseController.js');

app.get('/items/:vegetable', homeController.sendReqParam);

app.listen(3000);
