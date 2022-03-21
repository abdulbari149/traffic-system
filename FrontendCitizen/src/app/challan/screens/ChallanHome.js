import React from "react";

import { View } from "native-base";

import Header from "../../../components/Header";
import HeaderText from "../../../components/HeaderText";
import SearchBar from "../components/SearchBar";
import ZeroChallan from "../components/ZeroChallan";

import * as routes from "../../../routes";

const ChallanHome = ({ navigation }) => {
  const challansExists = true;

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header />
      <SearchBar />
      <HeaderText title="Your Challans" />
      {challansExists ? // <ChallanCard
      //     onPayment={() => navigation.navigate(routes.PAYMENT_METHOD)}
      //     onDetailButtonPress={() => navigation.navigate(routes.CHALLAN_DETAILS)}
      // />
      null : (
        <ZeroChallan />
      )}
    </View>
  );
};

export default ChallanHome;
