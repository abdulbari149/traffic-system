const { Schema, model, Types } = require("mongoose");

const WardenImageSchema = new Schema({
  length: { type: Number },
  chunkSize: { type: Number },
  uploadDate: { type: Date },
  filename: { type: String, trim: true, searchable: true },
  md5: { type: String, trim: true, searchable: true },
  metadata: {
    imageType: {
      type: String,
      enum: ["idCardFront", "idCardBack", "profilePic"],
    },
  },
}, { collection: 'warden_image.files' });

const WardenImage = model(
  "WardenImage",
  WardenImageSchema,
  "warden_image.files"
);

module.exports = WardenImage;
