const { Schema, model,Types } = require("mongoose");

const WardenSchema = new Schema({
  first_name: String,
  last_name: String,
  phone_number: String,
  email: String,
  password: String,
  authorized: {
    type: Boolean,
    default: false,
  },
  images: [
    {
      type : Types.ObjectId,
      ref: "warden_image.files",
      default: null
    },
  ],
});

const Warden = model("Warden", WardenSchema);

module.exports = Warden;
