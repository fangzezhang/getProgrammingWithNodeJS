const express = require('express');
const layouts = require('express-ejs-layouts');
const homeController = require('./controllers/homeController.js');

const app = express();

app.use(layouts);

app.set('view engine', 'ejs');
app.set('port', process.env.port || 3000);

app.get('/name/:paramName', homeController.respondWithName);

app.listen(app.get('port'));
console.info(`server open at http://localhost:${app.get('port')}`);
