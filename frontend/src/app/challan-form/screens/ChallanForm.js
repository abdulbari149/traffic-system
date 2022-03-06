import React, { memo } from "react";
import { ScrollView } from "native-base";
import { HeaderText, Steps, Form } from "@components";
import styles from "../styles";
import { VOILATION_SCREEN } from "src/routes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";

const ChallanForm = ({ navigation }) => {
  const data = {
    names: [
      "driver_cnic",
      "vehicle_no",
      "province",
      "city",
      "district",
      "place_of_voilation",
    ],
    placeholders: [
      "Enter driver CNIC",
      "Enter vehicle Registration Numbeer",
      "Province",
      "City",
      "District",
      "Enter the place of voilation",
    ],
    types: ["number", "text", "text", "text", "text"],
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        width: "100%",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          margin: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Steps activeStep={1} />
        <HeaderText title="Challan Form" my="20" />
        <Form
          data={data}
          handleSubmit={(values) => {
            console.log(values)
            navigation.navigate(VOILATION_SCREEN)
          }}
          _btn={{
            text: "Next",
            style: {
              width: 200,
              marginTop: 20,
            },
          }}
          containerStyles={{
            backgroundColor: "#fff",
            width: "100%",
            margin: 0,
            padding: 0,
          }}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default memo(ChallanForm);
