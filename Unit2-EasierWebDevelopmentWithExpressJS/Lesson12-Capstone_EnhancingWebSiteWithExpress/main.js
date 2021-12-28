const express = require('express');
const app = express();
const layout = require('express-ejs-layouts');
const homeController = require('./controllers/homeController');
const errorController = require('./controllers/errorController');

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(layout);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('welcome!');
});
app.get('/coursers', homeController.showCourses);
app.get('/contact', homeController.showSignUp);
app.post('/contact', homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(3000, () => {
  console.info(`server running at http://localhost:${app.get('port')}`);
});
