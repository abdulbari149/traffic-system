import React, { useState } from "react";
import { View, Box, Flex, Text, Image } from "native-base";
import { launchImageLibrary } from "react-native-image-picker";
import { idCardStyles as styles } from "../styles";
import { Button } from "@components/index";
import { useUploadPhoto } from "src/hooks/useUploadPhoto";

const IDCard = ({ photoname, imageSource }) => {
  const { photo, selectPhotoTapped } = useUploadPhoto()
  return (
    <Box
      style={[
        styles.container,
        {
          paddingHorizontal: photo ? 10 : 20,
          paddingVertical: photo ? 15 : 35,
        },
      ]}
    >
      {photo ? (
        <Box style={styles.imageContainer}>
          <Image
            source={{ uri: photo.source.uri }}
            style={{ width: "100%", height: 160 }}
            resizeMode="cover"
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
              onPress={selectPhotoTapped}
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
