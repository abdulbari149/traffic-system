import React, { useCallback, useState } from "react";
import styles from "../styles";
import { HeaderText, Button, Modal } from "@components";
import IDCard from "../components/IDCard";
import { Alert, View } from "react-native";
import { useSelector } from "react-redux";
import { supabase } from "src/supabase";
import axios from "axios";
import { ScrollView } from "native-base";
import { uploadImage } from "src/utils/upload-images";
import { useSignUpMutation } from "src/api";
import mime from "mime";
import { AUTH_HOME_SCREEN } from "src/routes";
const IdentityProof = ({ navigation }) => {
  const {
    auth: { warden, wardenImages },
  } = useSelector((state) => state);
  const [modalVisible, setModalVisible] = React.useState(false);

  const [loading, setLoading] = useState(false);

  const createFileValues = () => {
    const fileValues = [];
    for (let key in wardenImages) {
      const image = wardenImages[key];
      const filetype = mime.getType(image.source.uri);
      console.log({
        name: image.fileName.substring(
          0,
          image.fileName.length - filetype.length
        ),
      });
      fileValues.push({
        name: image.fileName,
        uri: image.source.uri,
        type: filetype,
        key,
      });
    }
    return fileValues;
  };
  const [signup, result] = useSignUpMutation();

  const handleSubmit = async () => {
    try {
      const { data, error } = await signup(warden);
      if (error?.status) {
        switch (error.status) {
          case 500:
            throw new Error("Server Error Occured");
          case 404:
            console.log(error)
            throw new Error("Your profile wasn't submitted please try again");

          default:
            throw new Error(error.message);
        }
      }
      const files = createFileValues();

      const response = await Promise.all(
        files.map(({ key, ...file }) => uploadImage(file, key, data.data._id))
      );

      if(response) {
        setModalVisible(true)
      } else {
        throw new Error("Error Occured while uploading your images")
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.signUpContainer}>
        {modalVisible && <View style={styles.wrapper}></View>}
        <HeaderText
          title="Proof of Identity"
          subTitle="Kindly upload your id card photo for verification"
        />
        <IDCard
          photoname="front"
          imageSource={require("src/cdn/warden_id_front.png")}
        />
        <IDCard
          photoname="back"
          imageSource={require("src/cdn/warden_id_back.png")}
        />
        <Button
          title="Save"
          size={60}
          style={{
            marginTop: 20,
            width: 200,
            alignSelf: "center",
            marginBottom: 30,
          }}
          onPress={handleSubmit}
        />
        <Modal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title="Request Submitted"
          subTitle="A request to register your id has been received. We will approve afterwards you an use the application"
          image={{
            source: require("src/cdn/uploaded_successfully.png"),
            alt: "uploaded_successfully",
          }}
          renderButton={(onConfirm) => <Button title="Okay" onPress={onConfirm} />}
          onConfirm={() => {
            navigation.navigate(AUTH_HOME_SCREEN)
          }}
        />
      </View>
    </ScrollView>
  );
};

export default IdentityProof;
