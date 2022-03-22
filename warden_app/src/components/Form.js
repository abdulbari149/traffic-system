import React, { useState, useEffect, useMemo } from "react";
import { Formik } from "formik";
import { Field, Button } from "@components";
import { VStack, Box, Text } from "native-base";
import { StyleSheet } from "react-native";
import * as yup from "yup" 

const schema = yup.ObjectSchema()

const Form = ({
  data,
  handleSubmit,
  _btn,
  containerStyles = {},
  isReadOnly = false,
}) => {
  const fieldInitialValues = useMemo(() => {
    return data.reduce(
      (obj, { name, defaultValue }) => ({ ...obj, [name]: typeof defaultValue !== "undefined"? defaultValue: "" }),
      {}
    );
  }, []);

  return (
    <Formik
      initialValues={fieldInitialValues}
      onSubmit={(value) => handleSubmit(value)}
      validationSchema={schema}
    >
      {({
        handleChange,
        handleBlur,
        values,
        handleSubmit: formikHandleSubmit,
      }) => (
        <VStack alignItems="center" width="100%" mt="2" style={containerStyles}>
          {data?.map(({ name, type = "text", defaultValue, ...item }, idx) => {
            return (
              <Field
                onChange={handleChange(name)}
                onBlur={handleBlur(name)}
                isReadOnly={isReadOnly}
                key={name}
                name={name}
                value={defaultValue}
                placeholder={item.placeholder ?? ""}
                label={name.replace(/_/g, " ")}
                type={data.type ?? "text"}
              />
            );
          })}
          <Button {..._btn} onPress={formikHandleSubmit} />
        </VStack>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formGroup: {
    width: "100%",
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#EAEAEA",
    borderStyle: "solid",
    marginVertical: 15,
    position: "relative",
    paddingTop: 30,
  },
  formGroupLabel: {
    position: "absolute",
    top: -15,
    left: 40,
    width: 120,
    height: 30,
    backgroundColor: "#0038FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  formGroupLabelText: {
    fontWeight: "medium",
    letterSpacing: "lg",
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    borderRadius: 12,
    textTransform: "capitalize",
  },
});

export default React.memo(Form);
