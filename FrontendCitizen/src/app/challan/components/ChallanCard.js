import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Button } from "native-base";
import styles from "../styles";
import _ from "lodash";
import { CHALLAN_DETAILS, PAYMENT_METHOD } from "../../../routes";
const ChallanCard = ({ challan, onPayment, onDetailButtonPress }) => {
  const getDate = (date) => {
    const newDate = new Date(date)
    return newDate.toDateString()
  }

  let details = {
    psid_no: challan.psid_no,
    vehicle_no: challan.vehicle_registration_no,
    date: getDate(challan.createdAt),
  };

  const navigation = useNavigation();

  return (
    <View style={styles.challanCard}>
      <View style={{ flex: 1.5 }}>
        {Object.keys(details).map((key) => (
          <View key={key} style={{ flexDirection: "row", paddingVertical: 4 }}>
            <Text fontWeight="bold">
              {_.capitalize(key.replace(/_/g, " "))}:{" "}
            </Text>
            <Text>{details[key]}</Text>
          </View>
        ))}
        <Button
          marginTop="auto"
          bg={challan.paid ? "#400606" : "#B21B1B"}
          style={{ width: 150 }}
          onPress={() =>
            navigation.navigate(PAYMENT_METHOD, { id: challan._id })
          }
          disabled={challan.paid}
        >
          { challan.paid ?  "Already Paid!" : "Pay" }
        </Button>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text color="black" fontSize={23} fontWeight="bold">
          Rs {challan.fine_imposed}
        </Text>
        <Text color="#555151" fontSize={16}>
          Fine
        </Text>
        <Button
          bg="transparent"
          padding={0}
          marginTop="auto"
          _text={{
            style: styles.challanDetailText,
          }}
          onPress={() =>
            navigation.navigate(CHALLAN_DETAILS, { id: challan._id })
          }
        >
          Details
        </Button>
      </View>
    </View>
  );
};

export default ChallanCard;
