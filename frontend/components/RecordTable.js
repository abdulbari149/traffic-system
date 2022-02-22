import React from "react";
import { ScrollView, Text } from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";
import { StyleSheet } from "react-native";
import { TextBtn } from ".";
const data = [
  { challan_no: "062", vehicle_no: "KHZ-0987", details: "123" },
  { challan_no: "062", vehicle_no: "KHZ-0987", details: "123" },
  { challan_no: "062", vehicle_no: "KHZ-0987", details: "123" },
  { challan_no: "062", vehicle_no: "KHZ-0987", details: "123" },
  { challan_no: "062", vehicle_no: "KHZ-0987", details: "123" },
  { challan_no: "062", vehicle_no: "KHZ-0987", details: "123" },
  { challan_no: "062", vehicle_no: "KHZ-0987", details: "123" },
  { challan_no: "062", vehicle_no: "KHZ-0987", details: "123" },
  { challan_no: "062", vehicle_no: "KHZ-0987", details: "123" },
  { challan_no: "062", vehicle_no: "KHZ-0987", details: "123" },
];

const RecordTable = ({ navigation, status }) => {
  console.log({ status })
  return (
    <ScrollView mt="10px">
      <Row
        style={{
          display: "flex",
          gap: 40,
          backgroundColor: "rgba(0, 56, 255, 0.05)",
          padding: 15,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <Text fontWeight="bold" flex={0.33}>Challan No</Text>
        <Text fontWeight="bold" flex={0.33}>Vehicle No</Text>
      </Row>
      {data.map((row, rowId) => (
        <Row
          style={[
            styles.rowItem,
            {
              backgroundColor:
                rowId % 2 === 1 ? "rgba(0, 56, 255, 0.05)" : "#fff",
            },
          ]}
          key={rowId}
        >
          {Object.keys(row).map((key, idx) => (
            <Col style={{ flex: 1 }} key={key + " " + idx}>
              {key === "details" ? (
                <TextBtn text="Details" onPress={() => navigation.navigate("Record Details")} />
              ) : (
                <Text>{row[key]}</Text>
              )}
            </Col>
          ))}
        </Row>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rowItem: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
  },
});

export default RecordTable;
