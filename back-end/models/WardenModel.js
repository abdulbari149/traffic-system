const { Schema, model } = require("mongoose");

const WardenSchema = new Schema({
  name: String,
  wardenId: Number,
  verification_number: Number,
  password: String
});

const Warden = model("Warden", WardenSchema);

module.exports = Warden