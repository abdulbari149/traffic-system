const express = require("express");
const cors = require("cors")
const { connect } = require('mongoose');

const CitizenRoutes = require("./routes/CitizenRoutes");
const WardenRoutes = require("./routes/WardenRoutes");

const dotenv = require("dotenv")
dotenv.config({ encoding: false });

const PORT = process.env.PORT || 8080;
const uri = process.env.URI;

(async () => {
    try {
        await connect(uri).then(() => console.log("Db Connected"));
        
        const app = express();
        app.use(cors())
        app.set("jwt", process.env.JWTSecret)
        app.use(express.json());
        app.use("/api/citizen", CitizenRoutes);
        app.use("/api/warden", WardenRoutes);
        app.listen(PORT, () => {
            console.log(`App listening on http://localhost:${PORT} 🚀 !`)
        });

    } catch (error) {
        console.error(error)
    }
    
})();


