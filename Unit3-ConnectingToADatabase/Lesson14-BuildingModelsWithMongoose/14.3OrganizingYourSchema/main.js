const mongoose = require('mongoose');
const Subscriber = require('./models/subscriber');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/recipe_db');

let myQuery = Subscriber
  .findOne({
    name: 'Jon2',
  })
  .where('email', /Jon/);
myQuery.exec((error, data) => {
  if (data) {
    console.info(data);
  }
});
