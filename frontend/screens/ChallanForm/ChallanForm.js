import React from "react";
import { View } from "native-base";
import { HeaderText, Steps, Form } from "../../components";
import styles from "../../styles/ChallanForm.style"
const ChallanForm = ({ navigation }) => {
  const data = {
    names: ["driver_cnic", "vehicle_no", "province", "city", "district"],
    placeholders: [
      "Enter driver CNIC",
      "Enter vehicle Registration Numbeer",
      "Province",
      "City",
      "District",
    ],
    types: ["number", "text", "text", "text", "text"],
  };

  return (
    <View style={styles.container}>
      <Steps activeStep={1} />
      <HeaderText title="Challan Form" my="20px" />
      <Form
        data={data}
        handleSubmit={() => navigation.navigate("Voilation")}
        _btn={{
          text: "Next",
          style: {
            alignSelf: "flex-start",
            width: 200
          },
        }}
      />
    </View>
  );
};

export default ChallanForm;
