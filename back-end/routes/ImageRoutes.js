const { Router } = require("express");
const { ImageController } = require("../controllers");
const router = Router({ mergeParams: true });
const upload = require("../lib/imageUpload");
const { verifyAuthToken } = require("../middlewares/authTokenVerification");
const { accessDB } = require("../middlewares/conditionalAccess");
router.use(accessDB);
router.post("/upload", upload, ImageController.uploadImages);

router.get("/get", verifyAuthToken, ImageController.getImage);
module.exports = router;
