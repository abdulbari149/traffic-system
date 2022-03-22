const { Schema, model } = require('mongoose');

const CitizenSchema = new Schema({
  first_name: String,
  last_name: String,
  cnic_no: String,
  phone_number: String,
  email: String,
  password: String,
  authorized: Boolean
});

const Citizen = model('Citizen', CitizenSchema);

module.exports = Citizen
