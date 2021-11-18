const express = require('express');
const app = express();

const homeController = require('./controllers/homeController.js');

app.set('view engine', 'ejs');

app.set('port', process.env.prot || 3000);

app.get('/name/:myName', homeController.respondWithName);

app.listen(app.get('port'));
console.info(`server running at http://localhost:${app.get('port')}`);
