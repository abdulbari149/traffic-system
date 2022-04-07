const { Router } = require("express");
const { WardenController, ImageController } = require("../controllers");
const router = Router();
const upload = require("../lib/imageUpload");
const { verifyAuthToken } = require("../middlewares/authTokenVerification");
router.post("/upload-image", upload, ImageController.uploadImages);
router.get(
  "/challan-count",
  verifyAuthToken,
  WardenController.getWardenChallanCount
);
router.get("/approval", WardenController.getWardenListForApproval);
router.get("/approval/:id", WardenController.getWardenDetailsById);

module.exports = router;
