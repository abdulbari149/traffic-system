const { Schema, model } = require("mongoose");

const VoilationSchema = new Schema({
  code: String,
  v_name: String,
  v_type: {
    type:String,
    enum: ["moving", "parking"]
  },
  price: Number,
});

const Voilation = model("voilation", VoilationSchema);

module.exports = Voilation;
