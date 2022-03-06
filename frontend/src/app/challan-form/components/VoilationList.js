import React from "react";
import { Text, Checkbox, Flex, ScrollView } from "native-base";
import { voilationStyles as styles } from "../styles"

const VoilationBox = ({ item }) => {
  return (
    <Flex style={styles.voilationContainer} direction="row">
      <Text lineHeight="23px" w="85%" color="#0038FF">
        {item.title}
      </Text>
      <Checkbox value={item.id} ml="3" accessibilityLabel="check the voilation" />
    </Flex>
  );
};

const VoilationList = ({ navigation, query }) => {
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
      {data.map(item => <VoilationBox item={item} key={item.id} />)}
    </ScrollView>
  );
};


export default VoilationList;
