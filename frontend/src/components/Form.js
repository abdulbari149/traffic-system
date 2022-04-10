import React, { useState, useEffect, useMemo } from "react";
import { Formik } from "formik";
import { Field, Button } from "@components";
import { VStack, Box, Text } from "native-base";
import { StyleSheet } from "react-native";

const Form = ({
  data,
  handleSubmit,
  _btn,
  containerStyles = {},
  isReadOnly = false,
  validationSchema = {},
}) => {
  console.log({ handleSubmit })
  const fieldInitialValues = useMemo(() => {
    const names = [...data.names];
    return names.reduce(
      (obj, name, idx) => ({
        ...obj,
        [name]: typeof data?.values !== "undefined" ? data.values[idx] : "",
      }),
      {}
    );
  }, []);

  console.log({ fieldInitialValues })
  return (
    <Formik
      initialValues={fieldInitialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        values,
        handleSubmit: formikHandleSubmit,
        errors,
        isSubmitting,
      }) => {
        return (
          <VStack
            alignItems="center"
            width="100%"
            mt="2"
            style={containerStyles}
          >
            {data.names.map((name, idx) => {
              return (
                <Field
                  onChange={handleChange(name)}
                  onBlur={handleBlur(name)}
                  isReadOnly={isReadOnly}
                  key={name}
                  name={name}
                  value={values[name]}
                  placeholder={data.placeholders ? data?.placeholders[idx] : ""}
                  label={name.replace(/_/g, " ")}
                  type={data.types ? data?.types[idx] : "text"}
                  error={errors[name]}
                />
              );
            })}
            <Button
              {..._btn}
              onPress={() => {
                console.log("Form submitting")
                formikHandleSubmit();
              }}
              disabled={isSubmitting}
            />
          </VStack>
        );
      }}
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
