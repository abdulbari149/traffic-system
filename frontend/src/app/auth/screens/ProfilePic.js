import React, { useEffect, useState } from "react";
import { View, Text, Image, Box } from "native-base";
import { profilePicStyles as styles } from "../styles";
import { HeaderText, Button, TextBtn } from "src/components";
import { useSelector, useDispatch } from "react-redux";
import { useUploadPhoto } from "src/hooks/useUploadPhoto";
import { setImage } from "../slice";
import { Alert } from "react-native";
import { IDENTITY_PROOF_SCREEN } from "src/routes";
const ProfilePic = ({ navigation, route }) => {
  const { selectPhotoTapped } = useUploadPhoto();
  const [profilePhoto, setProfilePhoto] = useState({ ...route.params.photo });
  const dispatch = useDispatch();

  const handlePhotoChange = async () => {
    try {
      const { photo } = await selectPhotoTapped();
      setProfilePhoto(photo);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handlePhotoUpload = () => {
    dispatch(setImage({ photoname: "profilePic", photo: profilePhoto }));
    navigation.navigate(IDENTITY_PROOF_SCREEN)
  };

  return (
    <View style={styles.profilePicContainer}>
      <HeaderText title="Profile Pic" />
      {profilePhoto && (
        <Box width="260px" rounded={1000} mt="10">
          <Image
            borderColor="#0038FF"
            borderWidth={2}
            r
            source={profilePhoto?.source}
            alt="profilepic"
            size={260}
            rounded={1000}
            resizeMode="cover"
            resizeMethod="scale"
            maxWidth="300"
            maxHeight="300"
          />
        </Box>
      )}
      <Button
        title="Save"
        onPress={handlePhotoUpload}
        style={{ width: 200, marginTop: 30, marginBottom: 15 }}
      />
      <TextBtn
        text="Change Photo"
        styles={{ fontWeight: "bold", fontSize: 18 }}
        onPress={handlePhotoChange}
      />
    </View>
  );
};

export default ProfilePic;
