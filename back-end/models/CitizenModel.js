const { Schema, model } = require("mongoose");

const CitizenSchema = new Schema({
  name: String,
  cnic: Number,
  email: String,
  password: String,
  phone_number: Number,
  city: String,
  country: String,
  address: String,
});

const Citizen = model("Citizen", CitizenSchema);

module.exports = Citizen
