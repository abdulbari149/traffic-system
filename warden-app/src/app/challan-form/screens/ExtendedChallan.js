import React, { useEffect, useState, useMemo } from "react";
import { HeaderText, Steps, Form, Modal } from "@components";
import { ScrollView } from "native-base";
import { CHALLAN_HOME_SCREEN } from "src/routes";
import { useDispatch, useSelector } from "react-redux";
import { resetChallanState } from "../slice";
import { useGenerateRandomUniqueNumber } from "src/hooks/useGenerateRandomUniqueNumber";
import { setAuthToken } from "src/utils/async-storage";
import { extendedChallanFormData } from "../constants";
import { Alert } from "react-native";
import { useSubmitChallanMutation } from "src/api";
import * as yup from "yup";
const validationSchema = yup.object({
  psid_no: yup.string().length(17, "PSID number should be 17 digits long"),
  offender_name: yup.string(),
  offender_cnci: yup.string(),
  province: yup.string(),
  division: yup.string(),
  district: yup.string(),
  vehicle_registration_no: yup.string(),
  voilation_code: yup.string(),
  voilation: yup.string(),
  issuing_officer: yup.string(),
  traffic_sector: yup.string(),
  fine_imposed: yup.string(),
});
const FullChallanForm = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sure, setSure] = useState(null);
  const { challan, meta } = useSelector((state) => state.challan);
  const { warden } = useSelector((state) => state.auth);
  const psid_no = useGenerateRandomUniqueNumber(17);
  const [formData, setFormData] = useState(extendedChallanFormData);

  useEffect(() => {
    let formValues = {
      ...challan,
      traffic_sector: warden.traffic_sector,
      issuing_officer: warden.name,
      fine_imposed: "Rs. " + challan.fine_imposed.toString(),
      psid_no,
    };
    setFormData((prevFormData) =>
      prevFormData.map((f) => ({ ...f, defaultValue: formValues[f.name] }))
    );
  }, []);

  const [submitChallan, { data, error, isSuccess, isError, isLoading }] =
    useSubmitChallanMutation();

  const dispatch = useDispatch();

  const challanData = {
    citizen: meta.offender_id,
    voilation: meta.voilation_id,
    psid_no,
    province: challan.province,
    district: challan.district,
    division: challan.division,
    place_of_voilation: challan.place_of_voilation,
    vehicle_registration_no: challan.vehicle_registration_no,
    fine_imposed: challan.fine_imposed,
    traffic_sector: challan.traffic_sector,
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("ResponseData ===>", { data });
      dispatch(resetChallanState());
      navigation.navigate(CHALLAN_HOME_SCREEN);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log({ error: error.data.data });
      Alert.alert(error?.data?.message);
    }
  }, [isError]);

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
        data={formData}
        validationSchema={validationSchema}
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
        onConfirm={async function(){
          setModalVisible(false);
          try {
            await submitChallan(challanData);
          } catch (error) {
            console.log({ error });
          }
        }}
      />
    </ScrollView>
  );
};

export default FullChallanForm;
