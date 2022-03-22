import React, { useState } from 'react';
import {
  Alert,
  Modal as NativeModal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { HeaderText, Button, TextBtn } from '@components';
import { Image, Flex } from 'native-base';
const Modal = ({
  title,
  subTitle,
  modalVisible,
  setModalVisible,
  image,
  onConfirm = () => console.log('Hello')
}) => {
  return (
    <NativeModal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView} alt='modal-image'>
          <Image size={120} {...image} />
          <HeaderText title={title} subTitle={subTitle} />
          <Flex
            direction='row'
            align='center'
            justify='space-between'
            width={150}
          >
            <Button
              title='Sure'
              size='sm'
              style={{ width: 110 }}
              onPress={() => onConfirm()}
            />
            <TextBtn text='No' style={{ fontWeight: 'bold' }} onPress={() => setModalVisible(false)} />
          </Flex>
        </View>
      </View>
    </NativeModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Modal;
