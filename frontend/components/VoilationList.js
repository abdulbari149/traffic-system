import React from "react";
import { FlatList } from "react-native";
import { ScrollView } from "native-base";
import { VoilationBox } from ".";

const VoilationList = ({ navigation, query }) => {
  console.log({ navigation, query });
  const data = [
    { id: 1, title: "This is voilation" },
    { id: 2, title: "This is voilation" },
    { id: 3, title: "This is voilation" },
    { id: 4, title: "This is voilation" },
    { id: 5, title: "This is voilation" },
    { id: 6, title: "This is voilation" },
    { id: 7, title: "This is voilation" },
    { id: 8, title: "This is voilation" },
  ];
  return (
    <ScrollView mt="10px">
      {data.map(item => <VoilationBox item={item} />)}
    </ScrollView>
  );
};

export default VoilationList;
