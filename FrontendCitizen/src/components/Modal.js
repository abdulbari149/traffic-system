import React from "react";

import { Alert, Modal as NativeModal, StyleSheet, View } from "react-native";

import { TextBtn } from "./Button";

import { Image, Flex, Text, Button } from "native-base";

const Modal = ({
  title,
  subTitle,
  modalVisible,
  setModalVisible,
  image,
  btnTitle,
  twoButtons = false,
  secondBtnTitle,
  handleSubmit,
}) => {
  return (
    <NativeModal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView} alt="modal-image">
          <Image width={220} source={image} alt="image" />
          <Text fontSize="3xl" style={{ color: "white" }}>
            {title}
          </Text>
          <Text style={styles.modalSubTitle}>{subTitle}</Text>
          <Button style={styles.button} onPress={handleSubmit}>
            <Text fontSize="20" style={styles.buttonText}>
              {btnTitle}
            </Text>
          </Button>
          {twoButtons && secondBtnTitle ? (
            <TextBtn
              text="No"
              style={{ fontWeight: "bold" }}
              onPress={() => setModalVisible(false)}
            />
          ) : null}
        </View>
      </View>
    </NativeModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#444444",
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 170,
    backgroundColor: "white",
    alignSelf: "center",
    height: 50,
  },
  buttonText: { color: "#F40B0B", fontWeight: "bold" },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalSubTitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 18,
  },
});

export default Modal;
