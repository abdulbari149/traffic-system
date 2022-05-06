import React, { useLayoutEffect } from "react";
import { View, Text, Image } from "react-native";
import { Header, Button } from "@components";
import styles from "../styles"
import { CHALLAN_FORM_SCREEN } from "src/routes"
import { setAuthToken } from "src/utils/async-storage";
import { useSelector } from "react-redux";
const ChallanFormHome = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);


  return (
    <View style={styles.challanHomeContainer}>
      <Header screenName="Challan Form" />
      <View style={styles.challanHomeMain}>
        <Image source={require("src/cdn/challan-screen-img.png")} width={200} />
        <Text
          style={styles.challanHomeParagraph}
          minimumFontScale={12}
          adjustsFontSizeToFit
          numberOfLines={2}
        >
          Best place to write life stories and share your journey experiences.
        </Text>
        <Button
          title="Challan Form"
          onPress={() => navigation.navigate(CHALLAN_FORM_SCREEN)}
        />
      </View>
    </View>
  );
};


export default ChallanFormHome;
