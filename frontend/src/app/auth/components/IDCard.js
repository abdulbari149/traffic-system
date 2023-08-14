import React from "react";
import { View, Box, Flex, Text, Image } from "native-base";
import { idCardStyles as styles } from "../styles";
import { Button } from "@components/index";
import { useUploadPhoto } from "src/hooks/useUploadPhoto";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../slice";
import { Alert } from "react-native";

const IDCard = ({ photoname, imageSource }) => {
  const name =
    "idCard" +
    photoname.charAt(0).toUpperCase() +
    photoname.substring(1, photoname.length);
  
  const { selectPhotoTapped } = useUploadPhoto();
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.auth.wardenImages[name]);


  const handlePhotoUpload = async () => {
    try {
      const { photo } = await selectPhotoTapped();

      dispatch(
        setImage({
          photoname: name,
          photo,
        })
      );
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Box
      style={[
        styles.container,
        {
          paddingHorizontal: photo ? 10 : 20,
          paddingVertical: photo ? 8 : 35,
        },
      ]}
    >
      {photo ? (
        <Box style={styles.imageContainer}>
          <Image
            source={{ uri: photo.source.uri }}
            style={{ width: photo.size, height: 200 }}
            resizeMode="contain"
            alt={photoname}
          />
        </Box>
      ) : (
        <Flex
          direction="row"
          size={120}
          w="100%"
          align="center"
          justify="space-between"
        >
          <View style={styles.cardLeft}>
            <Text style={styles.cardTitle}>{photoname} Photo</Text>
            <Text style={styles.cardSubtitle}>
              Upload your back photo. The photo must be of passport size..
            </Text>
            <Button
              onPress={handlePhotoUpload}
              size="sm"
              title="Upload"
              style={{ width: 130 }}
            />
          </View>
          <Image source={imageSource} alt="warden id card front photo" />
        </Flex>
      )}
    </Box>
  );
};

export default IDCard;
