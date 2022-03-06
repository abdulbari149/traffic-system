import React from "react";
import { View, Image, Text } from "native-base";
import { Header, HeaderText, ScreenTabs } from "@components";
import RecordTable from "../components/RecordTable"
const Records = ({ navigation }) => {
  return (
    <View flex={1} bgColor="#fff" alignItems="center" px="12px">
      <Header />
      <Image
        source={require("src/cdn/records.png")}
        size="160px"
        alt="records"
      />
      <HeaderText
        title="Records"
        containerStyles={{ mb: "6px", mt: "0px", pt: "0px" }}
      />
      <ScreenTabs
        routes={[{key: "paid", title:"Paid"}, { key: "unpaid",title: "Unpaid" }]}
        sceneMap={{ "paid": RecordTable, "unpaid": RecordTable }}
      />
    </View>
  );
};

export default Records;
