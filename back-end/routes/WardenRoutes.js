const { Router } = require("express");
const { WardenController, ImageController } = require("../controllers");
const router = Router();
const upload = require("../lib/imageUpload");
const { verifyAuthToken } = require("../middlewares/authTokenVerification");
router.get("/approval", WardenController.getWardenListForApproval);
router.get("/approval/:id", WardenController.getWardenDetailsById);

module.exports = router;
