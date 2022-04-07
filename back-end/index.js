const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");

const routes = require("./routes");

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
    app.use("/api/warden", routes.WardenRoutes);
    app.use("/api/auth/:user", routes.AuthRoutes);
    app.use("/api/voilation", routes.VoilationRoutes);
    app.use("/api/citizen", routes.CitizenRoutes);
    app.use("/api/challan", routes.ChallanRoutes);
    app.use("/api/image/:user", routes.ImageRoutes);
    app.listen(PORT, () => {
      console.log(`App listening on http://localhost:${PORT} 🚀 !`);
    });
  } catch (error) {
    console.error(error);
  }
})();
