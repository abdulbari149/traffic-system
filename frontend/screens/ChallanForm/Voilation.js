import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  ScreenTabs,
  Steps,
  VoilationBox,
  VoilationList,
} from "../../components";

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
      <Steps />
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

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    padding: 12,
  },
  heading: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 30,
  },
  textContainer: {
    marginVertical: 30,
  },
  proceedBtn: {
    marginRight: 10,
    fontSize: 16,
    color: "#0038ff",
    fontWeight: "bold",
  },
});

export default Voilation;
