const { Schema, model, Types } = require("mongoose");

const WardenSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    phone_number: String,
    service_id: String,
    email: String,
    password: String,
    designation: {
      type: String,
      enum: ["SSP", "DSP", "SHO", "Inspector", "Sub-Inspector"],
    },
    traffic_sector: String,
    authorized: {
      type: Boolean,
      default: false,
    },
    reviewed: {
      type: Boolean,
      default: false,
    },
    images: [{
      type: Types.ObjectId,
      ref: "Image"
    }]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

WardenSchema.virtual("challans", {
  ref: "Challan",
  localField: "_id",
  foreignField: "warden",
});

const Warden = model("Warden", WardenSchema);

module.exports = Warden;
