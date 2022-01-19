const { Router } = require("express")
const {CitizenController, WardenController} = require("../controller");
const apiroute = Router()

apiroute.get("/warden/auth/login", WardenController.authLogin)
module.exports = apiroute