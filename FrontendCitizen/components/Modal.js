import React from "react";
import {
    Alert,
    Modal as NativeModal,
    StyleSheet,
    View,
} from "react-native";
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
    handleSubmit
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
                    <Image size={170} source={image} alt="image" />
                    <Text fontSize="3xl" style={{ color: 'white' }}>{title}</Text>
                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', paddingVertical: 18 }}>{subTitle}</Text>
                    <Button
                        style={{ width: 170, backgroundColor: 'white', alignSelf: 'center', height: 50 }}
                        onPress={() => handleSubmit()}
                    >
                        <Text fontSize='20' style={{ color: '#F40B0B', fontWeight: 'bold' }}>
                            {btnTitle}
                        </Text>
                    </Button>
                    {twoButtons && secondBtnTitle ? <TextBtn text="No" style={{ fontWeight: "bold" }} onPress={() => setModalVisible(false)} /> : null}
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
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

export default Modal;