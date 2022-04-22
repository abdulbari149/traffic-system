import React, { useEffect, useState } from "react";
import { Flex, View, Box, ScrollView } from "native-base";
import { Header, HeaderText, Loader } from "components";
import SearchBar from "../components/SearchBar";
import ZeroChallan from "../components/ZeroChallan";
import ChallanCard from "../components/ChallanCard";
import * as routes from "routes";
import { useGetChallanRecordsQuery } from "api";
import { useSelector } from "react-redux";
const ChallanHome = ({ navigation }) => {
  const { data, error, isSuccess, isError, isLoading } =
    useGetChallanRecordsQuery();
  // Success Handler
  const [challans, setChallans] = useState([]);
  useEffect(() => {
    if (isSuccess) {
      console.log("Response data ==> ", data);
      const challanData = JSON.parse(JSON.stringify([...data?.data]))
      setChallans(challanData.sort((c, nC) => !c.paid));
    }
  }, [isSuccess]);

  //Error Handler
  useEffect(() => {
    if (isError) {
      console.log("Response Error ==> ", error);
    }
  }, [isError]);
  const dummyData = [
    {
      psid_no: "12317148313245671",
      vehicle_registration_no: "KHB-4561",
      date: "11-04-2022",
      fine_imposed: 200,
      _id: 2131423,
    },
    {
      psid_no: "12317148313245671",
      vehicle_registration_no: "KHB-4561",
      date: "11-04-2022",
      fine_imposed: 200,
      _id: 2131423,
    },
    {
      psid_no: "12317148313245671",
      vehicle_registration_no: "KHB-4561",
      date: "11-04-2022",
      fine_imposed: 200,
      _id: 2131423,
    },
  ];

  async function searchChallan() {}

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <Header />
      <HeaderText title={"C H A L L A N 'S"} />
      <Box px="4" flex="1">
        {isLoading && <Loader size={60} />}
        {isSuccess &&
          challans.length > 0 &&
          data?.data?.map((challan, idx) => (
            <ChallanCard
              onPayment={() => navigation.navigate(routes.PAYMENT_METHOD)}
              onDetailButtonPress={() =>
                navigation.navigate(routes.CHALLAN_DETAILS, {
                  id: challan._id,
                  challan,
                })
              }
              challan={challan}
              key={idx}
            />
          ))}
        {!isLoading && isSuccess && challans.length === 0 && <ZeroChallan />}
      </Box>
    </ScrollView>
  );
};

export default ChallanHome;
