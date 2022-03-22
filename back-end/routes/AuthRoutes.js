const { Router } = require("express");
const router = Router({ mergeParams: true });
const fs = require("fs/promises");
const path = require("path");
const { AuthController } = require("../controllers");
const {
  loginValidator,
  forgetPasswordValidator,
  changePasswordValidator,
  registerValidator,
} = require("../helpers/validators");
const { verifyAuthToken } = require("../middlewares/authTokenVerification");
const { accessDB } = require("../middlewares/conditionalAccess");
const {
  validationRequestSchema,
} = require("../middlewares/validationRequestSchema");

router.use(accessDB);

router.post(
  "/register",
  registerValidator(),
  validationRequestSchema,
  AuthController.register
);

router.post(
  "/login",
  loginValidator(),
  validationRequestSchema,
  AuthController.login
);

router.post("/verify-sms", AuthController.sendVerificationCode);

router.post(
  "/forget-password",
  forgetPasswordValidator(),
  validationRequestSchema,
  AuthController.forgetPassword
);

router.post("/verify-auth", verifyAuthToken, (req, res) => {
  res.send({
    message: "you can access the application",
    data: { loggedIn: true },
    status: 200,
  });
});

router.put(
  "/change-password",
  changePasswordValidator(),
  validationRequestSchema,
  verifyAuthToken,
  AuthController.changePassword
);

module.exports = router;
