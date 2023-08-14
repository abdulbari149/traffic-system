import { launchImageLibrary } from "react-native-image-picker";
export const useUploadPhoto = () => {
  const formatPhotoData = (imageData) => {
    console.log({ ...imageData, base64: undefined})
    let source;
    source = {
      uri: "data:image/jpeg;base64," + imageData.base64,
      isStatic: true,
    };

    const temp = imageData.base64;
    if (Platform.OS === "android") {
      source = { uri: imageData.uri, isStatic: true };
    } else {
      source = {
        uri: imageData.uri.replace("file://", ""),
      };
    }
    return {
      source,
      data: temp,
      fileName: imageData.fileName,
      type: imageData.type,
      size: 500,
    };
  };
  async function selectPhotoTapped() {
    const options = {
      quality: 0.75,
      maxWidth: 300,
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
      },
    };
    return new Promise((resolve, reject) => {
      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          reject("User rejected to select a photo");
        } else if (response.errorMessage) {
          reject({ code: response.errorCode, message: response.errorMessage });
        } else if (response.assets) {
          const photo = formatPhotoData(response.assets[0]);
          resolve({ photo });
        }
      });
    });
  }
  return { selectPhotoTapped };
};
