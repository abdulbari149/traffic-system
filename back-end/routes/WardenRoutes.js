const { Router } = require("express");
const router = Router();

const { WardenController, AuthController } = require("../controllers");
const {
  registerWardenValidator,
  loginWardenValidator,
  forgetPasswordValidator,
  changePasswordValidator,
} = require("../helpers/validators");
const { verifyAuthToken } = require("../middlewares/authTokenVerification");
const {
  validationRequestSchema,
} = require("../middlewares/validationRequestSchema");

router.post(
  "/auth/forget-password",
  forgetPasswordValidator,
  validationRequestSchema,
  AuthController.forgetPassword
);

router.put(
  "/auth/change-password",
  changePasswordValidator,
  validationRequestSchema,
  verifyAuthToken,
  AuthController.changePassword
);

router.post(
  "/auth/login",
  loginWardenValidator,
  validationRequestSchema,
  AuthController.login
);
// /api/warden/auth/login

router.post("/auth/verify-sms", AuthController.sendVerificationCode);
// /api/warden/auth/verifySMS

router.post(
  "/auth/register",
  registerWardenValidator,
  validationRequestSchema,
  AuthController.registerWarden
);
// /api/warden/auth/register

router.get("/:id", WardenController.getWardenData);
// /api/warden/:id

module.exports = router;
