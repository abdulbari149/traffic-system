const { Router } = require("express");
const { WardenController } = require("../controllers");
const router = Router();
const upload = require("../lib/imageUpload");
router.post(
  "/upload-image",
  (req, res, next) => {
    console.log({ file: req, body: req.body });

    next();
  },
  upload,
  WardenController.uploadImages
);
// / /api/warden/upload

// /api/citizen/auth/register

// /api/citizen/auth/:id

module.exports = router;
