const { Router } = require("express");
const { WardenController, ImageController } = require("../controllers");
const { authorizeValidator } = require("../helpers/validators");
const router = Router();
const upload = require("../lib/imageUpload");
const { verifyAuthToken } = require("../middlewares/authTokenVerification");
const {
  validationRequestSchema,
} = require("../middlewares/validationRequestSchema");
const { verifyAdmin } = require("../middlewares/verifyAdmin");

router.post("/upload-image", upload, ImageController.uploadImages);
router.get(
  "/challan-count",
  verifyAuthToken,
  WardenController.getWardenChallanCount
);
router.get(
  "/approval",
  verifyAuthToken,
  verifyAdmin,
  WardenController.getWardenListForApproval
);
router.get("/approval/:id", WardenController.getWardenDetailsById);
router.post(
  "/authorize",
  authorizeValidator(),
  validationRequestSchema,
  verifyAuthToken,
  verifyAdmin,
  WardenController.authorizeWarden
);
router.post(
  "/decline",
  authorizeValidator(),
  validationRequestSchema,
  verifyAuthToken,
  verifyAdmin,
  WardenController.declineWarden
);
module.exports = router;
