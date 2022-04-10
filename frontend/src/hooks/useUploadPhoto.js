import { launchImageLibrary } from "react-native-image-picker";
import {useState  } from "react"
export const useUploadPhoto = ()=>{
  const [photo, setPhoto] = useState(null);

  function selectPhotoTapped() {
    const options = {
      quality: 0.75,
      maxWidth: 300,
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
      },
    };
    launchImageLibrary(options, (response) => {
      let imageData = null;
      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        imageData = response.assets[0];
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
            isStatic: true,
          };
        }

        setPhoto({
          source,
          imgBase64: temp,
        });
      }
    });
  }
  return { photo, selectPhotoTapped }
}