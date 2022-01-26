const { Router } = require("express");
const router = Router();

const { WardenController } = require("../controllers");

router.post("/auth/login", WardenController.authLogin);
// /api/warden/auth/login 

router.post("/auth/verifySMS", WardenController.verifySMS);
// /api/warden/auth/verifySMS 

router.post("/auth/register", WardenController.registerWarden);
// /api/warden/auth/register 

router.get("/:id", WardenController.getWardenData);
// /api/warden/:id

module.exports = router;