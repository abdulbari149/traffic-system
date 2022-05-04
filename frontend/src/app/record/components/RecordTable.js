import React, { useEffect } from "react";
import { ScrollView, View, Text } from "native-base";
import { Col, Row } from "react-native-easy-grid";
import { TextBtn, Loader } from "@components/index";
import { RECORD_DETAIL_SCREEN } from "src/routes";
import { recordTableStyles as styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { useGetChalllanRecordsQuery } from "src/api";

const RecordTable = ({ route }) => {
  const navigation = useNavigation();

  const {
    data: challanRecords = { data: [] },
    error,
    isSuccess,
    isError,
    isLoading,
    isFetching,
  } = useGetChalllanRecordsQuery({
    page: 0,
    paid: route.key === "paid" ? 1 : 0,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log("Results: ", { challanRecords });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log("Error ==> ", error);
    }
  }, [isError]);

  return (
    <ScrollView mt="10px">
      <Row style={styles.row}>
        <Text fontWeight="bold" flex={0.45}>
          Citizen
        </Text>
        <Text fontWeight="bold" flex={0.33}>
          Vehicle No
        </Text>
      </Row>
      {isLoading && (
        <View alignItems="center" flex={1} minHeight="100px">
          <Loader />
        </View>
      )}

      {isSuccess &&
        challanRecords?.data.map((row, idx) => (
          <Row
            style={[
              styles.rowItem,
              {
                backgroundColor:
                  idx % 2 === 1 ? "rgba(0, 56, 255, 0.05)" : "#fff",
              },
            ]}
            key={idx}
          >
            <Col style={{ flex: 1.65 }}>
              <Text>{row.name}</Text>
            </Col>
            <Col style={{ flex: 1 }}>
              <Text>{row.vehicle_registration_no}</Text>
            </Col>
            <Col style={{ flex: 1 }}>
              <TextBtn
                text="Details"
                styles={{ textAlign: "right", paddingRight: 10 }}
                onPress={() =>
                  navigation.navigate(RECORD_DETAIL_SCREEN, {
                    challanId: row._id,
                  })
                }
              />
            </Col>
          </Row>
        ))}
    </ScrollView>
  );
};

export default RecordTable;
