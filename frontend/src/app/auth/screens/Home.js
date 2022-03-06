import React from "react";
import { Image, Flex, VStack, Box } from "native-base";
import { HeaderText, Dots, Button } from "src/components";
import styles from "../styles";
import { LOGIN_SCREEN, SIGNUP_SCREEN } from "src/routes";
import { StyleSheet } from "react-native"
const AuthHome = ({ navigation }) => {


  return (
    <Flex pos="relative" flex={1} align="center" overflowX="hidden">
      <Box style={styles.homeContainer}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/saadfarhan/image/upload/v1643998712/Capture_pvvd6i.png",
          }}
          alt="Alternative Text"
          size="2xl"
        />
      </Box>
      <Box flex={1} style={styles.homeHeaderContainer}>
        <VStack flex={1} pos="relative" w="100%" alignItems="center">
          <HeaderText title="Hello Warden" subTitle="Let's start working now" />
          <Button
            variant="outlined"
            onPress={() => navigation.navigate(SIGNUP_SCREEN)}
            title="SignUp"
            style={{
              marginVertical: 15,
              width: 200,
            }}
          />
          <Button
            onPress={() => navigation.navigate(LOGIN_SCREEN)}
            title="Login"
            style={{
              width: 200,
            }}
          />
          <Dots activeScreen={1} />
        </VStack>
      </Box>
    </Flex>
  );
};

export default AuthHome;
