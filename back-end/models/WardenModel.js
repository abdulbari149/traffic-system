const { Schema, model } = require("mongoose");

const WardenSchema = new Schema({
  first_name: String,
  last_name: String,
  phone_number: String,
  email: String,
  password: String,
  authorized: Boolean
});

const Warden = model("Warden", WardenSchema);

module.exports = Warden;

