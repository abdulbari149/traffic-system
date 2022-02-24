import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const StepItem = ({ step, activeStep, separators }) => {
  console.log({ step });
  return (
    <View
      onLayout={() => {
        separators.updateProps("trailing", {
          trailingItem: step,
          highlighted: activeStep - 1 >= parseInt(step),
        });
      }}
      style={{
        ...styles.stepCircle,
        backgroundColor: step <= activeStep ? "#0038FF" : "#D9E1FF",
      }}
    >
      <Text style={styles.stepText}>{step}</Text>
    </View>
  );
};

const Steps = ({ activeStep }) => {
  const data = ["1", "2", "3"];

  const renderSteps = ({ item, separators, index }) => {
    console.log(separators);
    return (
      <StepItem step={item} activeStep={activeStep} separators={separators} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderSteps}
        keyExtractor={(step) => step}
        ItemSeparatorComponent={({ highlighted }) => (
          <View
            style={[
              styles.separator,
              { marginLeft: 0, backgroundColor: highlighted ? "#0038FF" : "#D9E1FF"},
            ]}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  stepCircle: {
    width: 50,
    height: 50,
    borderRadius: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stepText: {
    color: "white",
    fontSize: 16,
  },
  separator: {
    width: 60,
    height: 3,
    marginVertical: 25,
  },
});

export default Steps;
