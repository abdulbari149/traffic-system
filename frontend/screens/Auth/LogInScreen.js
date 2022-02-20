import React from "react";
import { View, ImageBackground } from "react-native";
import { Text, Image, Button } from "native-base";
import styles from "../../styles/Login.styles";
import { Formik } from "formik";
import { Field } from "../../components"
const LogInScreen = ({ navigation }) => {
  const imagebg = {
    uri: "https://res.cloudinary.com/saadfarhan/image/upload/v1643909305/loginBg_rcsqrv.png",
  };

  return (
    <View>
    <ImageBackground source={imagebg} style={styles.bgimage}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/saadfarhan/image/upload/v1643998001/317501_l0lfzi.jpg",
        }}
        alt="Alternate Text"
        size="xl"
        style={styles.logo}
      />
      <Formik
        initialValues={{ wardenId: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ initialValues, errors, handleChange, handleBlur, values  }) => {
          return (
            <View style={styles.loginContainer}>
              <Text fontSize="3xl" style={styles.loginHeading}>
                Login
              </Text>
              <Field
                name="wardenId"
								type="text"
								placeholder="Enter warden's Id"
								label="Warden's Id"
              />
              <Field
                name="password"
								type="password"
								placeholder="Enter your password"
								label="Password"
              />
              <Button
                size="sm"
                shadow="9"
                style={styles.loginButton}
                onPress={() => navigation.navigate("Verification Screen")}
              >
                <Text style={styles.loginButtonText} padding="0">
                  Login
                </Text>
              </Button>
              <Button size="sm" variant="ghost" style={styles.ghostButton}>
                <Text style={styles.ghostButtonText} padding="0">
                  Forgot password?
                </Text>
              </Button>
            </View>
          );
        }}
      </Formik>
    </ImageBackground>
    </View>
  );
};

export default LogInScreen;

