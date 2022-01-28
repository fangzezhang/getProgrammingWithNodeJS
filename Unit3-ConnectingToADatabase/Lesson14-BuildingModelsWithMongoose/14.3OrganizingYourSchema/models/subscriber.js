const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subscriberSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  zipCode: Number,
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
