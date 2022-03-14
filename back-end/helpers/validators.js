const { body, check } = require("express-validator");
const { Warden } = require("../models");

exports.registerWardenValidator = [
  body(["first_name", "last_name"]).isAlpha().isLength({ min: 3 }),
  body("email")
    .isEmail()
    .custom((value) => {
      return Warden.findOne({ email: value }).then((warden) => {
        if (warden) {
          throw new Error("User already exists with the email address");
        }
        return value;
      });
    }),
  check("password")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Password field is required")
    .isLength({ min: 8, max: 100 })
    .withMessage("Password must be equal to or greater than 8 character")
    .isStrongPassword({
      minLowercase: 2,
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 2,
    })
    .withMessage(
      "Password is too weak. Please add at least 1 uppercase, 2 lowercase, 1 number and 1 symbol"
    ),
  check("confirm_password", "Invalid Confirm Password ")
    .exists({ checkNull: true })
    .withMessage("Confirm Password field is required")
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("Confirm pasword should be same as Password");
      }
      return value;
    }),
  check("phone_number")
    .isMobilePhone(["en-PK"], { strict: true })
    .withMessage("You haven't entered a valid phone number")
    .custom((value) => {
      if (!value.startsWith("+92")) {
        throw new Error(
          "Please Provide a valid phone number located in Pakistan"
        );
      }
      return value;
    }),
];

exports.loginWardenValidator = [
  check("email")
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Please provide with an email address")
    .isEmail(),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Please provide with a valid password"),
];
exports.forgetPasswordValidator = [
  check("email")
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Please provide with an email address")
    .isEmail(),
];

exports.changePasswordValidator = [
  check("password")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Password field is required")
    .isLength({ min: 8, max: 100 })
    .withMessage("Password must be equal to or greater than 8 character")
    .isStrongPassword({
      minLowercase: 2,
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 2,
    })
    .withMessage(
      "Password is too weak. Please add at least 1 uppercase, 2 lowercase, 1 number and 1 symbol"
    ),
  check("confirm_password", "Invalid Confirm Password ")
    .exists({ checkNull: true })
    .withMessage("Confirm Password field is required")
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("Confirm pasword should be same as Password");
      }
      return value;
    }),
];
