import React, { useEffect } from "react";
import { ScrollView, Text, View } from "native-base";
import ChallanDetailAccordian from "../components/ChallanDetailAccordian";
import { useGetChallanByIdQuery } from "api/index";
import styles from "../styles";
const ChallanDetails = ({ navigation, route }) => {
  const { id, ...fine } = route.params
  console.log({ id, fine })
  const { data, error, isSuccess, isError, isLoading } =
    useGetChallanByIdQuery(id);
  // Success Handler
  useEffect(() => {
    if (isSuccess) {
      console.log("Response data ==> ", data);
    }
  }, [isSuccess]);

  // //Error Handler
  // useEffect(() => {
  //   if (isError) {
  //     console.log("Response Error ==> ", error);
  //   }
  // }, [isError]);

  return (
    <ScrollView style={styles.detailsContainer}>
      <View style={styles.detailsTop}>
        <View>
          <Text fontWeight="bold" fontSize={24}>
            Challan Details
          </Text>
        </View>
        <View>
          <Text fontSize={24} fontWeight="bold">
             Rs.
          </Text>
          <Text style={styles.fineText}>Fine</Text>
        </View>
      </View>
      <ChallanDetailAccordian />
    </ScrollView>
  );
};

export default ChallanDetails;
