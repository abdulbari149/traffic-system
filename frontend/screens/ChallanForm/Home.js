import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Header, Button } from "../../components";

const ChallanFormHome = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.sreenContainer}>
      <Header screenName={"Challan Form"} />
      <View style={styles.main}>
        <Image source={require("../../cdn/challan-screen-img.png")} />
        <Text
          style={styles.paragraph}
          minimumFontScale={12}
          adjustsFontSizeToFit
          numberOfLines={2}
        >
          Best place to write life stories and share your journey experiences.
        </Text>
        <Button
          title="Challan Form"
          onPress={() => navigation.navigate("Challan Form")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sreenContainer: {
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  main: {
    flex: 0.75,
    marginVertical: "12%",
    marginHorizontal: "10%",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 15,
    textAlign: "center",
    lineHeight: 25,
  },
});

export default ChallanFormHome;
