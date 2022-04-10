import React from "react";
import styles from "../styles";
import { HeaderText, Button, Modal } from "@components";
import IDCard from "../components/IDCard";
import { View } from "react-native";

const IdentityProof = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
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
        style={{ marginTop: 20, width: 200, alignSelf: "center" }}
        onPress={() =>setModalVisible(true)}
      />
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title="Uploaded"
        subTitle="The photos are uploaded successfully."
        image={{source: require("src/cdn/uploaded_successfully.png"), alt: "uploaded_successfully"}}
      />
    </View>
  );
};

export default IdentityProof;
