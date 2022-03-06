import React, { memo } from "react";
import { Image, Flex, Box, Text, View, ScrollView } from "native-base";
import { Form } from "@components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../styles";

const Password = ({ route, data, text, handleSubmit }) => {
  return (
    <KeyboardAwareScrollView>
      <Flex style={styles.passwordContainer}>
        <Box style={styles.passwordImageBox}>
          <Text fontSize="3xl" style={styles.passwordScreenText}>
            {route.name.replace("_", " ")}
          </Text>
          <Image
            source={{
              uri: "https://res.cloudinary.com/saadfarhan/image/upload/v1645981928/Vector_ofcysn.png",
            }}
            alt={route.name}
            style={styles.passwordImage}
          />
          <Text style={styles.passwordScreenSubTitle}>{text}</Text>
        </Box>
        <View style={styles.passwordFormContainer}>
          <Form
            data={data}
            containerStyles={{
              width: "55%",
              height: 300,
              marginTop: 40,
            }}
            handleSubmit={handleSubmit}
            _btn={{
              title: "Send",
              style: {
                width: 250,
                marginVertical: 15,
              },
            }}
          />
        </View>
      </Flex>
    </KeyboardAwareScrollView>
  );
};

export default memo(Password);
