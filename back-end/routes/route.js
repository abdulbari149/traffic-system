const { Router } = require("express")
const {CitizenController, WardenController} = require("../controller");
const { verifyAuthToken  } = require("../middlewares/authTokenVerification")
const apiroute = Router()
//middlewares
apiroute.use("/warden", verifyAuthToken)
// Warden Routes 
apiroute.post("/auth/warden/login",  WardenController.authLogin)
apiroute.post("/auth/warden/verifySMS", verifyAuthToken, WardenController.verifySMS)
apiroute.post("/auth/warden/register", WardenController.registerWarden)
apiroute.get("/warden/getWarden", WardenController.getWardenData)

module.exports = apiroute