const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");

const WardenRoutes = require("./routes/WardenRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const VoilationRoutes = require("./routes/VoilationRoutes");
const CitizenRoutes = require("./routes/CitizenRoutes");
const ChallanRoutes = require("./routes/ChallanRoutes");

const dotenv = require("dotenv");
dotenv.config({ encoding: false });

const PORT = process.env.PORT || 8080;
const uri = process.env.URI;

(async () => {
  try {
    const conn = await connect(uri);
    const wardenImageBucket = new conn.mongo.GridFSBucket(conn.connection.db, {
      bucketName: "warden_image",
    });
    const app = express();
    app.use(cors());
    app.set("jwt", process.env.JWTSecret);
    app.use(express.json());
    app.use("/api/warden", WardenRoutes);
    app.use("/api/auth/:user", AuthRoutes);
    app.use("/api/voilation", VoilationRoutes);
    app.use("/api/citizen", CitizenRoutes);
    app.use("/api/challan", ChallanRoutes);
    app.listen(PORT, () => {
      console.log(`App listening on http://localhost:${PORT} 🚀 !`);
    });
  } catch (error) {
    console.error(error);
  }
})();
