const { Schema, model, Types } = require("mongoose");

const CitizenSchema = new Schema({
  first_name: String,
  last_name: String,
  cnic_no: {
    type: String,
    unique: true,
  },
  phone_number: String,
  email: String,
  password: String,
}, {
   timestamps: true,
   toJSON: { virtuals: true },
   toObject: { virtuals: true }
});

CitizenSchema.virtual("name").get(function () {
  return this.first_name + this.last_name;
});
CitizenSchema.virtual("challans", {
  ref: "Challan",
  localField: "_id",
  foreignField: "citizen",
});
CitizenSchema.virtual("images", { 
  ref: "Image",
  localField: "_id",
  foreignField: "metadata.user"
})
const Citizen = model("Citizen", CitizenSchema);
module.exports = Citizen;
