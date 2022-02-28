import React from "react";
import { Button, ScrollView, Text } from "native-base";
import { HeaderText, Form } from "../../components";
import styles from "../../styles/Auth.styles";

const SignUp = ({ navigation }) => {
  const formData = {
    names: [
      "first_name",
      "last_name",
      "email",
      "phone_number",
      "password",
      "confirm_password",
    ],
    placeholders: [
      "Enter your First Name",
      "Enter your Last Name",
      "Enter your Email",
      "Enter your Phone Number",
      "Enter your Password",
      "Retype the Password",
    ],
    types: ["text", "text", "email", "number", "password", "password"],
  }

  return (
    <ScrollView style={styles.signUpContainer}>
      <HeaderText title="Signup" my="20px" styles={{ marginTop: 30 }} />
      <Form
        data={formData}
        handleSubmit={() => console.log("data Submitted")}
        _btn={{
          title: "Create Account",
          style: {
            width: 250,
            marginVertical: 15
          }
        }}
      />
      <Button style={{ backgroundColor: 'white', paddingTop: -10, paddingBottom: 30 }} onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: '#0038FF', fontWeight: 'bold', fontSize: 15 }}>Already have an account?</Text>
      </Button>
    </ScrollView>
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
