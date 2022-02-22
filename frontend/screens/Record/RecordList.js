import React from "react";
import { View, Image, Text } from "native-base";
import { Header, HeaderText, ScreenTabs, RecordTable } from "../../components";

const PaidRecord = () => {
  return (
    <View>
      <Text>PaidRecord</Text>
    </View>
  );
};

const UnpaidRecord = () => {
  return (
    <View>
      <Text>UnpaidRecord</Text>
    </View>
  );
};

const RecordList = ({ navigation }) => {
  return (
    <View flex={1} bgColor="#fff" alignItems="center" px="12px">
      <Header />
      <Image
        source={require("../../cdn/records.png")}
        size="160px"
        alt="records"
      />
      <HeaderText
        title="Records"
        containerStyles={{ mb: "6px", mt: "0px", pt: "0px" }}
      />
      <ScreenTabs
        tabs={["Paid", "Unpaid"]}
        screen={RecordTable}
        screenProps={{
          navigation,
          one: {
            status: "paid",
          },
          two: {
            status: "unpaid",
          },
        }}
      />
    </View>
  );
};

export default RecordList;
