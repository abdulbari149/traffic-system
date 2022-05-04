import React from "react";
import { View, Image, Text } from "native-base";
import { Button, HeaderText } from "@components";
import { profilePicStyles as styles } from "../styles";
import { SHOW_PROFILE_PIC_SCREEN } from "src/routes";
import { useUploadPhoto } from "src/hooks/useUploadPhoto";
import { Alert } from "react-native";

const UploadProfilePic = ({ navigation }) => {
  const { selectPhotoTapped } = useUploadPhoto();

  const handleSelectPhoto = async () => {
    try {
      const { photo } = await selectPhotoTapped();
      navigation.navigate(SHOW_PROFILE_PIC_SCREEN, { photo });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.profilePicContainer}>
      <HeaderText title="Upload Profile Picture" />
      <Image
        source={require("src/cdn/upload_profile_pic_illustration.png")}
        size={250}
        flex={0.75}
        resizeMode="contain"
        alt="profile_pic_illustration"
        mt={15}
        mb="10"
      />
      <Text style={styles.text}>
        Please make sure your photo clearly shows your face
      </Text>
      <Button
        title="Upload a Photo"
        onPress={handleSelectPhoto}
        style={{ marginVertical: 15 }}
      />
    </View>
  );
};

export default UploadProfilePic;
