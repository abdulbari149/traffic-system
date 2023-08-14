import * as yup from "yup";

const cnicRegEx = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*^?&])[A-Za-z\d@$!%*?&]{8,}$/;

const loginValidationSchema = yup.object({
  cnic_no: yup
    .string()
    .matches(cnicRegEx, "CNIC No must follow the XXXXX-XXXXXXX-X format!")
    .required("This is a required field"),
  password: yup
    .string()
    .required("This is a required field")
    .min(8, "Password must be minimum of 8 characters long"),
});
const signupValidationSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, "Your first name length should atleast 3 characters")
    .max(256, "first name cannot exceed 256 characters")
    .required("This is a required field")
    .trim(),
  last_name: yup
    .string()
    .min(3, "Your last name length should atleast 3 characters")
    .max(256, "last name cannot exceed 256 characters")
    .required("This is a required field")
    .trim(),
  email: yup
    .string()
    .email("Invalid email formmat")
    .required("This is a required field"),
  password: yup
    .string()
    .required("This is a required field")
    .min(8, "Password must be minimum of 8 characters long")
    .matches(
      passwordRegEx,
      "Password must contain atleast one number, one special character, one uppercase and lowercase letter "
    ),
  confirm_password: yup
    .string()
    .required("This is a required field")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  phone_number: yup
    .string()
    .trim()
    .matches(/^[0-9]+$/, "The phone cannot contain non-numeric characters")
    .length(11, "The phone number should be 11 digits long"),
  cnic_no: yup
    .string()
    .matches(cnicRegEx, "CNIC No must follow the XXXXX-XXXXXXX-X format!")
    .required("This is a required field"),
});

const forgotPasswordValidationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email formmat")
    .required("This is a required field"),
});

const createNewPasswordValidationSchema = yup.object({
  new_password: yup
    .string()
    .required("This is a required field")
    .min(8, "Password must be minimum of 8 characters long")
    .matches(
      passwordRegEx,
      "Password must contain atleast one number, one special character, one uppercase and lowercase letter "
    ),
  confirm_password: yup
    .string()
    .required("This is a required field")
    .oneOf([yup.ref("new_password"), null], "Passwords must match"),
});

export {
  loginValidationSchema,
  createNewPasswordValidationSchema,
  signupValidationSchema,
  forgotPasswordValidationSchema,
};
