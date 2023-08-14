import React, { useEffect, useState } from "react";
import { Flex, View, Box, ScrollView } from "native-base";
import { Header, HeaderText, Loader } from "components";
import SearchBar from "../components/SearchBar";
import ZeroChallan from "../components/ZeroChallan";
import ChallanCard from "../components/ChallanCard";
import * as routes from "routes";
import { useGetChallanRecordsQuery } from "api";
import { useDispatch, useSelector } from "react-redux";
import { setChallans } from "../slice";
import { Alert } from "react-native";

const ChallanHome = ({ navigation }) => {
  const { data, error, isSuccess, isError, isLoading } =
    useGetChallanRecordsQuery();

  const { challans } = useSelector((state) => state.challan);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      const dupData = JSON.parse(JSON.stringify([...data?.data]));
      dispatch(setChallans({ data: dupData }));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      Alert.alert("Server Error Occured", "Try again Later.");
    }
  }, [isError]);

  async function searchChallan() {}

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <Header />
      <HeaderText title={"C H A L L A N 'S"} />
      <Box px="4" flex="1">
        {isLoading && <Loader size={60} />}
        {!isLoading &&
          isSuccess &&
          (data?.data.length ? (
            data?.data?.map((challan, idx) => (
              <ChallanCard
                onPayment={() => navigation.navigate(routes.PAYMENT_METHOD)}
                onDetailButtonPress={() => {
                  navigation.navigate(routes.CHALLAN_DETAILS, {
                    cid: challan._id,
                    paid: challan.paid
                  });
                }}
                challan={challan}
                key={idx}
              />
            ))
          ) : (
            <ZeroChallan />
          ))}
      </Box>
    </ScrollView>
  );
};

export default ChallanHome;
