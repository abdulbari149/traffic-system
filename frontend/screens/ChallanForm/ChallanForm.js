import React from "react";
import { View, VStack } from "native-base";
import { Steps, Button, Field } from "../../components";
import { Formik } from "formik";

const ChallanForm = ({ navigation }) => {
  return (
    <View flex={1} width="100%" alignItems="center" bgColor="#fff" px="12px">
      <Steps />

      <Formik
        initialValues={{
          driver_name: "",
          vehicle_no: "",
          location: "",
          date: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({}) => (
          <VStack width="100%">
            <Field
              name="driver_name"
              placeholder="Enter Email"
              label="Driver Name"
              type="email"
            />
            <Field
              name="vehicle_no"
              placeholder="Enter Email"
              label="Vehicle Number"
              type="number"
            />
            <Field
              name="location"
              placeholder="Enter Email"
              label="Location"
              type="text"
            />
            <Field name="Date" label="Date" type="date" />
          </VStack>
        )}
      </Formik>
      <Button
        title="Proceed"
        onPress={() => navigation.navigate("Voilation")}
      />
    </View>
  );
}

export default ChallanForm;
