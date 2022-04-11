import React from "react";

import { Flex, View, Box, ScrollView } from "native-base";

import Header from "../../../components/Header";
import HeaderText from "../../../components/HeaderText";
import SearchBar from "../components/SearchBar";
import ZeroChallan from "../components/ZeroChallan";
import ChallanCard from "../components/ChallanCard";
import * as routes from "../../../routes";
import { useGetChallanRecordsQuery } from "../../../api"
const ChallanHome = ({ navigation }) => {
  const challansExists = true;
  const { data, error, isSuccess, isError, isLoading } = useGetChallanRecordsQuery()
// Success Handler
  useEffect(() => {
    if(isSuccess){
      console.log("Response data ==> ", data)

    }
  }, [isSuccess]) 

  //Error Handler
  useEffect(() => {
    if(isError){
      console.log("Response Error ==> ", error)
    }
  }, [isError]) 
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

  async function searchChallan (){
    
  }

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <Header />
      <SearchBar onSearch={searchChallan}/>
      <HeaderText title={"C H A L L A N 'S"} />
      <Box px="4">
        {!data.data ? (
          dummyData.map((challan) => (
            <ChallanCard
              onPayment={() => navigation.navigate(routes.PAYMENT_METHOD)}
              onDetailButtonPress={() =>
                navigation.navigate(routes.CHALLAN_DETAILS)
              }
              challan={challan}
            />
          ))
        ) : (
          <ZeroChallan />
        )}
      </Box>
    </ScrollView>
  );
};

export default ChallanHome;
