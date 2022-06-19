import React from "react";
import { Alert, Modal as NativeModal, StyleSheet, View } from "react-native";
import { TextBtn } from "./Button";
import { Image, Flex, Text, Button } from "native-base";

const defaultModalButton = (text, onPress) => {
  return (
    <Button style={styles.button} onPress={onPress}>
      <Text fontSize="20" style={styles.buttonText}>
        {text}
      </Text>
    </Button>
  );
};

const Modal = (props) => {
  const {
    title,
    body,
    modalVisible,
    setModalVisible,
    image = null,
    onConfirm,
    onClose,
    btnText = "Next",
    renderButtons = defaultModalButton,
  } = props;

  return (
    <NativeModal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView} alt="modal-image">
          {image ? <Image width={180} source={image} alt="image" /> : null}
          <Text fontSize="2xl" style={{ color: "white" }}>
            {title}
          </Text>
          <Text style={styles.modalSubTitle}>{body}</Text>
          {renderButtons(btnText, onConfirm)}
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
