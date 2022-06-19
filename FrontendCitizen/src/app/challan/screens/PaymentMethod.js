import React, { useState, useEffect } from "react";
import { ScrollView, Image, Text } from "native-base";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import { usePayChallanMutation } from "api/index";
import { CHALLAN_HOME } from "routes";
import { errorAlert } from "utils/alert";
const PaymentMethod = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const id = route.params.id;
  const [payChallan, { data, error, isSuccess, isError }] =
    usePayChallanMutation();
  const handlePay = async () => {
    await payChallan({ id });
  };

  useEffect(() => {
    if (isSuccess) {
      setModalVisible(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      errorAlert({
        title: "Payment Intent Failed",
        body: "Challan payment was failed. Please try again!",
      });
    }
  }, [isError]);

  return (
    <ScrollView style={{ backgroundColor: "#B21B1B" }}>
      <Image
        source={require("../../../assets/images/payment.png")}
        alt="payment"
        style={{ marginTop: 70, marginBottom: 10 }}
      />
      <Text fontSize="3xl" color="white" textAlign="center" fontWeight="bold">
        Payment Method
      </Text>
      <Text
        color="white"
        textAlign="center"
        fontSize={16}
        style={{ paddingHorizontal: 50, paddingTop: 15 }}
      >
        Please enter your email address to receive the verification code
      </Text>
      <Button
        onPress={handlePay}
        title="Pay with easypaisa"
        variant="outlined"
        style={{
          btn: {
            width: 250,
            alignSelf: "center",
          },
        }}
      />
      <Modal
        title="Challan Paid Succesfully"
        body="Thanks for paying the challan.:)"
        btnText="Okay"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onConfirm={() => {
          setModalVisible(false);
          navigation.navigate(CHALLAN_HOME);
        }}
      />
    </ScrollView>
  );
};

export default PaymentMethod;
