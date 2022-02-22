import React from 'react';
import { Image, View, Flex, Text, VStack, Box } from 'native-base';
import { ImageBackground } from 'react-native';
import { Dots, HeaderText, Button } from "../../components"
import styles from '../../styles/Login.styles';

const LoginIntroScreen = ({ navigation }) => {
  const imagebg = {
    uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1644389724/Untitled_design_qtbh2a.png',
  };

  return (
    <Flex pos="relative" flex={1} align="center" overflowX="hidden">
      <Box
        flex={0.75}
        bgColor="#6497F7"
        width="100%"
        alignItems="center"
        justifyContent="center"
        py="60px">
        <Image
          source={{
            uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1643998712/Capture_pvvd6i.png',
          }}
          alt="Alternative Text"
          size="2xl"
        />
      </Box>
      <Box flex={1} style={styles.loginIntroHeaderContainer}>
        <VStack flex={1}  pos="relative" w="100%" alignItems="center">
          <HeaderText title="Hello Warden" subTitle="Let's start working now" />
          <Button onPress={() => navigation.navigate('Login')} title="Login" my="20px" shadow="8" />
          <Dots activeScreen={1} />
        </VStack>
      </Box>
    </Flex>
  );
};

export default LoginIntroScreen;
