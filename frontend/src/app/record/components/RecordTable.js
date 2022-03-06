import React from "react";
import { ScrollView, Text } from "native-base";
import {  Col, Row } from "react-native-easy-grid";
import { TextBtn } from "@components/index"
import { RECORD_DETAIL_SCREEN } from "src/routes"
import { recordTableStyles as styles } from "../styles"

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
        style={styles.row }
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
                <TextBtn text="Details" onPress={() => navigation.navigate(RECORD_DETAILS_SCREEN)} />
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


export default RecordTable;
