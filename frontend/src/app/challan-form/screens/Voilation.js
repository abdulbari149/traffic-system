import React, { useLayoutEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { EXTENDED_CHALLAN_SCREEN } from "src/routes";
import { ScreenTabs, Steps, HeaderText } from "@components";
import styles from "../styles";
import VoilationList from "../components/VoilationList";
import { useGetVoilationByTypeQuery } from "src/api";
import { useSelector } from "react-redux";
const Voilation = ({ navigation }) => {
  const [open, setOpen] = useState();
  const { challan } = useSelector((state) => state.challan);
  const handleProceed = () => {
    navigation.navigate(EXTENDED_CHALLAN_SCREEN);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={handleProceed}>
          <Text style={[styles.proceedBtn, { color: "#0038FF" }]}> Proceed </Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  const routes = [
    { key: "parking", title: "Parking" },
    { key: "moving", title: "Moving" },
  ];

  return (
    <View style={styles.container}>
      <Steps activeStep={2} />
      <View style={styles.textContainer}>
        <HeaderText title="Voilation" subTitle="Please select one voilation" />
      </View>
      <ScreenTabs
        routes={routes}
        sceneMap={{ parking: VoilationList, moving: VoilationList }}
      />
    </View>
  );
};

export default Voilation;
