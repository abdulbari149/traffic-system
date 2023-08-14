import React, { memo, useEffect, useState, useMemo } from "react";
import { ScrollView, VStack, Text } from "native-base";
import { HeaderText, Steps, Form, Select, Field, Button } from "@components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { VOILATION_SCREEN } from "src/routes";
import * as yup from "yup";
import { useGetCitizenByCNICQuery } from "src/api";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setChallan } from "../slice";
import data from "../constants/location.json";
import _ from "lodash";
import { Formik } from "formik";

const validationSchema = yup.object({
  driver_cnic: yup
    .string()
    .required("This is a required Field")
    .matches(
      new RegExp("^[0-9]{5}-[0-9]{7}-[0-9]$"),
      "CNIC No must follow the XXXXX-XXXXXXX-X format!"
    ),
  vehicle_registration_no: yup
    .string()
    .required("This is a required Field")
    .matches(
      new RegExp("^[a-zA-Z]{3}-[0-9]{4}$"),
      "Vehicle Registration Number must follo XXX-1234 format!"
    )
    .uppercase("Please make sure that your letters are uppercase"),
  province: yup.string().required("Please Select A Province"),
  division: yup.string().required("Please Select A Division"),
  district: yup.string().required("Please Select A District"),
  place_of_voilation: yup.string().required("This is a required field"),
});

const ChallanForm = ({ navigation }) => {
  const dispatch = useDispatch();

  const [cnic, setCnic] = useState("");
  const [formValues, setFormValues] = useState(null);
  const {
    currentData: citizenData,
    isLoading,
    error: citizenError,
    isUninitialized,
    isFetching,
    isError,
    isSuccess,
    refetch,
  } = useGetCitizenByCNICQuery(
    { cnic },
    {
      skip: !cnic,
      refetchOnMountOrArgChange: true,
    }
  );

  function onSubmit(values, { setSubmitting }) {
    setSubmitting(true);
    setFormValues({
      ...values,
      driver_cnic: undefined,
    });
    if (cnic !== values.driver_cnic) {
      setCnic(values.driver_cnic);
      setTimeout(() => {
        setSubmitting(false);
      }, 2000);
    } else {
      handleResponse();
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
    }
  }

  const handleResponse = () => {
    if (isSuccess) {
      navigation.navigate(VOILATION_SCREEN);
      const { name, cnic, id } = citizenData.data;
      dispatch(
        setChallan({
          data: { offender_name: name, offender_cnic: cnic, ...formValues },
          meta: { offender_id: id },
        })
      );
    } else if (isError) {
      Alert.alert(citizenError.data.message);
    }
  };


  useEffect(() => {
    if (!isFetching) {
      handleResponse();
    }
  }, [isFetching]);


  // Styles
  const {
    keyboardAwareScrollViewStyle,
    scrollViewStyles,
  } = styles;

  // Select Logic for province, division and city
  const [province, setProvince] = useState("");
  const [provinceList, setProvinceList] = useState([]);
  const [division, setDvision] = useState("");
  const [district, setDistrict] = useState("");

  useEffect(() => {
    let provinces = _.intersectionBy(data, "province").map((item, idx) => ({
      id: idx + 1,
      label: _.capitalize(item.province),
      value: item.province,
    }));
    setProvinceList(provinces);
  }, []);

  const selectedDivisionList = useMemo(() => {
    console.log("Divisions");
    return data
      .filter((item) => item.province === province)
      .map((nItem, idx) => ({
        id: idx + 1,
        label: _.capitalize(nItem.division),
        value: nItem.division,
      }));
  }, [province]);

  const selectedDistrictList = useMemo(() => {
    if (!division) {
      return [];
    }
    let item = data.filter(
      (item) => item.division === division && item.province === province
    );
    return item[0]?.districts.map((d, idx) => ({
      id: idx + 1,
      label: _.capitalize(d),
      value: d,
    }));
  }, [division, province]);

  const initialValues = {
    driver_cnic: "",
    vehicle_registration_no: "",
    province: "",
    division: "",
    district: "",
    place_of_voilation: "",
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={keyboardAwareScrollViewStyle}
    >
      <ScrollView contentContainerStyle={scrollViewStyles}>
        <Steps activeStep={1} />
        <HeaderText title={"Challan Form"} my="20" />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            isSubmitting,
            handleSubmit,
          }) => (
            <VStack alignItems="center" width="100%" mt="2">
              <Field
                onChange={handleChange("driver_cnic")}
                onBlur={handleBlur("driver_cnic")}
                name={"driver_cnic"}
                value={values.driver_cnic}
                placeholder={"Enter driver's cnic"}
                label={"Driver CNIC"}
                type={"text"}
                error={errors.driver_cnic}
              />
              <Field
                onChange={handleChange("vehicle_registration_no")}
                onBlur={handleBlur("vehicle_registration_no")}
                name={"vehicle_registration_no"}
                value={values.vehicle_registration_no}
                placeholder={"Enter the Vehicle Number"}
                label={"Vehicle Registration Number"}
                type={"text"}
                error={errors.vehicle_registration_no}
              />

              <Select
                value={values.province}
                handleChange={(value) => {
                  setProvince(value);
                  setDvision("");
                  setDistrict(""), handleChange("district")("");
                  handleChange("division")("");
                  handleChange("province")(value);
                }}
                items={provinceList}
                defaultItem="Select A Province"
                label={"Province"}
                error={errors.province}
              />
              <Select
                value={values.division}
                handleChange={(value) => {
                  setDvision(value);
                  setDistrict(""), handleChange("district")("");
                  handleChange("division")(value);
                }}
                items={selectedDivisionList}
                defaultItem="Select A Division"
                label={"Division"}
                message="Please Select A Province First"
                error={errors.division}
              />
              <Select
                value={values.district}
                handleChange={(value) => {
                  setDistrict(value);
                  handleChange("district")(value);
                }}
                items={selectedDistrictList}
                defaultItem="Select A District"
                label={"District"}
                message="Please Select A Division First"
                error={errors.district}
              />
              <Field
                onChange={handleChange("place_of_voilation")}
                onBlur={handleBlur("place_of_voilation")}
                name={"place_of_voilation"}
                value={values.place_of_voilation}
                placeholder={"Enter the place of voilation"}
                label={"Place of Voilation"}
                type={"text"}
                error={errors.place_of_voilation}
              />
              <Button
                style={{ width: 200, marginVertical: 20 }}
                disabled={isSubmitting}
                onPress={handleSubmit}
              />
            </VStack>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = {
  keyboardAwareScrollViewStyle: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    width: "100%",
  },
  scrollViewStyles: {
    margin: 0,
    display: "flex",
    alignItems: "center",
  },
  formContainerStyles: {
    backgroundColor: "#fff",
    width: "100%",
    margin: 0,
    padding: 0,
  },
  btnStyles: {
    width: 200,
    marginTop: 20,
  },
};

export default memo(ChallanForm);
