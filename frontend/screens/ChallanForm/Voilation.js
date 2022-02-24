import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  ScreenTabs,
  Steps,
  VoilationBox,
  VoilationList,
} from "../../components";
import styles from "../../styles/ChallanForm.style"

const Voilation = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("Full Challan Form")}>
          <Text style={styles.proceedBtn}> Proceed </Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Steps activeStep={2} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}> Voilation </Text>
        <Text style={styles.text}>
          Select the violation type for the challan.
        </Text>
      </View>
      <ScreenTabs
        tabs={["Parking Voilation", "Moving Voilation"]}
        screen={VoilationList}
        screenProps={{
          navigation,
          one: {
            query: "parking",
          },
          two: {
            query: "moving",
          },
        }}
      />
    </View>
  );
};



export default Voilation;
