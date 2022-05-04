import React, { useState, useEffect, useMemo } from "react";
import { Formik } from "formik";
import { Field, Button, Select } from "@components";
import { VStack, Box, Text } from "native-base";
import { StyleSheet } from "react-native";

const Form = (props) => {
  const {
    data,
    handleSubmit,
    _btn,
    containerStyles = {},
    isReadOnly = false,
    validationSchema = {},
  } = props;



  const fieldInitialValues = useMemo(() => {
    const values = data.reduce(
      (obj, item) => ({
        ...obj,
        [item.name]: item?.defaultValue,
      }),
      {}
    );
    return values;
  }, [data]);

  console.log("Field Values ==> ", JSON.stringify(fieldInitialValues, null, 2))

  return (
    <Formik
      initialValues={fieldInitialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        values,
        handleSubmit: formikHandleSubmit,
        errors,
        isSubmitting,
        initialValues
      }) => {
        return (
          <VStack
            alignItems="center"
            width="100%"
            mt="2"
            style={containerStyles}
          >
            {data.map((field, idx) => {
              if (field?.type === "select") {
                return (
                  <Select
                    items={field.items}
                    value={values[field.name]}
                    placeholder={field.placeholder ?? ""}
                    handleChange={handleChange(field.name)}
                    key={field.name}
                    label={field.name.replace(/_/g, " ")}
                    defaultItem={field.defaultItemLabel}
                  />
                );
              }
              return (
                <Field
                  onChange={handleChange(field?.name)}
                  onBlur={handleBlur(field.name)}
                  isReadOnly={isReadOnly}
                  key={field.name}
                  name={field.name}
                  value={values[field.name]}
                  placeholder={field.placeholder ?? ""}
                  label={field.name.replace(/_/g, " ")}
                  type={field?.type ?? "text"}
                  error={errors[field.name]}
                  readOnlyText={isReadOnly ? fieldInitialValues[field.name] : ""}
                />
              );
            })}
            <Button {..._btn} onPress={() => {
              console.log({ values, isSubmitting })
              formikHandleSubmit()
            }} disabled={isSubmitting}/>
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
