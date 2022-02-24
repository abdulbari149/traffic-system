import React from "react";
import { HeaderText, Steps, Form } from "../../components";
import { Flex, Text, ScrollView } from "native-base";
import styles from "../../styles/ChallanForm.style"
const FullChallanForm = () => {

  const data = {
    offender: {
      names: ["cnic_no", "full_name", "district" ,"city", "province" ],
    },
    warden:{
      names: ["warden_id"]
    }

  }


  return (
    <ScrollView _contentContainerStyle={{ backgroundColor: "#fff", padding: 2 }}>
      <Steps activeStep={3} />
      <HeaderText title="Complete Information" my="20px" />
      <Form data={data} multiple={true} /> 
    </ScrollView>
  );
};

export default FullChallanForm;
