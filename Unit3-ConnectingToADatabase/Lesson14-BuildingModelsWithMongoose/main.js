const mongoose = require('mongoose');
const db = mongoose.connection;
const subscriberSchema = mongoose.Schema({
  name: String,
  email: String,
  zipCode: Number,
});
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

mongoose.connect('mongodb://127.0.0.1:27017/recipe_db');

// 方式一: new + .save
let subscriber1 = new Subscriber({
  name: 'Jon2',
});

subscriber1.save((error, savedDocument) => {
  if (error) {
    console.info(error);
    return;
  }
  console.info(savedDocument);
});


// 方式二: create()
Subscriber.create(
  [{
    name: 'Akl2',
    age: 18,
  }],
  function (error, savedDocument) {
    if (error) {
      console.info(error);
      return;
    }
    console.info(savedDocument);
  }
);

db.once('open', () => {
  console.info('Mongoose connected successfully to MongoDB');
});

