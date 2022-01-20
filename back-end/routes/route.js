const { Router } = require("express")
const {CitizenController, WardenController} = require("../controller");
const apiroute = Router()
// Warden Routes 
apiroute.post("/auth/warden/login", WardenController.authLogin)
apiroute.post("/auth/warden/verifySMS", WardenController.verifySMS)
apiroute.post("/auth/warden/register", WardenController.registerWarden)
apiroute.get("/warden/getWarden/:id", WardenController.getWardenData)


module.exports = apiroute