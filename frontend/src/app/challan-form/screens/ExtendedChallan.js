import React, { useState } from "react";
import { HeaderText, Steps, Form, Modal } from "@components";
import { ScrollView } from "native-base";
import { CHALLAN_HOME_SCREEN } from "src/routes";
const FullChallanForm = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const data = {
    names: [
      "PSDI_no",
      "offenders_cnic",
      "offenders_name",
      "address",
      "vehicle_registration_number",
      "voilation_code",
      "voilation",
      "issuing_officer",
      "traffic_sector",
      "fine_imposed",
      "date",
    ],
    values: [
      "440901023314",
      "43410412689",
      "abdulbari",
      "Road",
      "KHV-0892",
      "A5",
      "Driving Voilation",
      "yasir",
      "lahore station",
      "200",
      "3-03-2022",
    ],
  };

  return (
    <ScrollView
      _contentContainerStyle={{ backgroundColor: "#fff", padding: 2 }}
    >
      <Steps activeStep={3} />
      <HeaderText title="Complete Information" my="20px" />

      <Form
        handleSubmit={() => setModalVisible(true)}
        _btn={{ title: "Submit", style: { width: 200 } }}
        isReadOnly={true}
        data={data}
        onPress={() => console.log("challan submitted")}
      />
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title="Confirmation"
        subTitle="Are you sure you want to submit?."
        image={{
          source: require("src/cdn/uploaded_successfully.png"),
          alt: "uploaded_successfully",
        }}
        onConfirm={() => {
          console.log("confirmation...")
          navigation.navigate(CHALLAN_HOME_SCREEN)
        setModalVisible(false)
      }}
      />
    </ScrollView>
  );
};

export default FullChallanForm;
