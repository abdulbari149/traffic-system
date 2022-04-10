import React from "react";
import { View, Image, Text, Flex } from "native-base";
import { Button, TextBtn, HeaderText } from "@components";
import { profilePicStyles as styles } from "../styles";
import {} from "react-native-image-picker";
import { IDENTITY_PROOF_SCREEN, SHOW_PROFILE_PIC_SCREEN, UPLOAD_PROFILE_PIC_SCREEN } from "src/routes";
import { useUploadPhoto } from "src/hooks/useUploadPhoto";
const UploadProfilePic = ({ navigation }) => {
  const { photo, selectPhotoTapped } = useUploadPhoto();

  
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
        onPress={() => selectPhotoTapped()}
        style={{ marginVertical: 15 }}
      />
    
    </View>
  );
};

export default UploadProfilePic;
