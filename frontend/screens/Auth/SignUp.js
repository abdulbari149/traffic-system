import React from "react";
import { Flex, VStack } from "native-base";
import {HeaderText, Form } from "../../components";
import styles from "../../styles/Auth.styles";

const SignUp = () => {
  const formData = {
    names: [
      "first_name",
      "last_name",
      "email",
      "password",
      "confirm_password",
    ],
    placeholders: [
      "Enter your first_name",
      "Enter your last name",
      "Enter your email",
      "Enter your paassword",
      "Retype the Password",
    ],
    types: ["text", "text", "email", "password", "password"],
  }

  return (
    <Flex style={styles.signUpContainer}>
      <HeaderText title="Signup" my="20px" />
      <Form
        data={formData}
        handleSubmit={() => console.log("data Submitted")}
        _btn={{
          title: "Create Account",
          style: {
            width: 250
          }
        }}

      />
    </Flex>
  );
};

export default SignUp;

// <Formik initialValues={{
//   first_name: "",
//   last_name: "",
//   email: "",
//   password: '',
//   confirm_password: ""
// }}>
//   {({ values, handleChange}) => (
//     <VStack>
//       <Field
//         name="firstName"
//         label="First Name"
//         placeholder="Enter your first name"
//         type="text"
//         onChange={handleChange("first_name")}
//         value={values.first_name}
//       />
//       <Field
//         name="lastName"
//         label="Last Name"
//         placeholder="Enter your last name"
//         type="text"
//         onChange={handleChange("last_name")}
//         value={values.last_name}
//       />
//       <Field
//         name="email"
//         label="Email"
//         placeholder="Enter your email"
//         type="email"
//         onChange={handleChange("email")}
//         value={values.email}
//       />
//        <Field
//         name="password"
//         label="Password"
//         placeholder="Enter your password"
//         type="password"
//         onChange={handleChange("password")}
//         value={values.password}
//       /> <Field
//       name="confirmPassword"
//       label="Confirm Password"
//       placeholder="Enter your Confirm Password"
//       type="password"
//       onChange={handleChange("confirm_password")}
//       value={values.confirm_password}
//     />
//     </VStack>
//   )}
// </Formik>
