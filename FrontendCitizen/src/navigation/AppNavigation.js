import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChallanHome from "../app/challan/screens/ChallanHome";
import ChallanDetails from "../app/challan/screens/ChallanDetails";
import PaymentMethod from "../app/challan/screens/PaymentMethod";
import { PAYMENT_METHOD, CHALLAN_DETAILS, CHALLAN_HOME } from "routes";
import { GoBackIcon } from "components";

const AppNavigation = () => {
  const ScreensStack = createNativeStackNavigator();
  const options = ({ navigation }) => ({
    headerTitle: () => <></>,
    headerShadowVisible: false
  });
  return (
    <ScreensStack.Navigator>
      <ScreensStack.Screen
        name={CHALLAN_HOME}
        component={ChallanHome}
        options={{
          headerShown: false
        }}
      />

      <ScreensStack.Screen
        name={PAYMENT_METHOD}
        component={PaymentMethod}
        options={options}
      />

      <ScreensStack.Screen
        name={CHALLAN_DETAILS}
        component={ChallanDetails}
        options={options}
      />
    </ScreensStack.Navigator>
  );
};

export default AppNavigation;
