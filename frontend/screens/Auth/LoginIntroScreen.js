<<<<<<< Updated upstream
import React from 'react';

import { Image, View, Text, Button } from 'native-base';

import styles from '../../styles/Login.styles';

const LoginIntroScreen = ({ navigation }) => {
    return (
        <View style={styles.loginIntroContainer}>
            <Image
                source={{ uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1643998712/Capture_pvvd6i.png' }}
                alt='Alternative Text'
                size='2xl' style={styles.headerImage}
            />
            <View style={styles.loginIntroHeaderContainer}>
                <Text fontSize='3xl' style={styles.loginIntroHeader}>
                    Hello Warden
                </Text>
                <Text fontSize='lg' style={styles.loginIntroSubtitle}>
                    Some text
                </Text>
                <Button size='sm' shadow='9' style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginButtonText} padding='0'>Login</Text>
                </Button>
            </View>
        </View>
    );
}
=======
import React from "react";
import { Image, Flex, VStack, Box } from "native-base";
import { Dots, HeaderText, Button } from "../../components";
import styles from "../../styles/Auth.styles";

const LoginIntroScreen = ({ navigation }) => {
  return (
    <Flex pos="relative" style={{ backgroundColor: '#6497F7' }} flex={1} align="center" overflowX="hidden">
      <Box
        flex={0.75}
        bgColor="#6497F7"
        width="100%"
        alignItems="center"
        justifyContent="center"
        py="60px"
      >
        <Image
          source={{
            uri: "https://res.cloudinary.com/saadfarhan/image/upload/v1643998712/Capture_pvvd6i.png",
          }}
          alt="Alternative Text"
          style={{
            width: 350,
            height: 350,
            marginTop: 70
          }}
        />
      </Box>
      <Box flex={1} style={styles.loginIntroHeaderContainer}>
        <VStack flex={1} pos="relative" w="100%" alignItems="center">
          <HeaderText title="Hello Warden" subTitle="Let's get started!" />
          <Button
            variant="outlined"
            onPress={() => navigation.navigate("SignUp")}
            title="SignUp"
            style={{
              marginVertical: 15,
              width: 200,
            }}
          />
          <Button
            onPress={() => navigation.navigate("Login")}
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
>>>>>>> Stashed changes

export default LoginIntroScreen;
