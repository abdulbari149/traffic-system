import React from "react";
import { recordDetailEntryStyles as styles } from "../styles";
import { View, Text } from "native-base";

const RecordDetailEntry = ({ item }) => {
  return (
    <View style={styles.entryContainer}>
      <Text style={styles.entryTitle}>{item.title}</Text>
      <Text
        style={[
          styles.entryValue,
          {
            padding: item.title === "Violation" ? 10 : 20,
            paddingRight: item.value === "Moving" ? 36 : 15,
          },
        ]}
      >
        {item.value}
      </Text>
    </View>
  );
};

export default RecordDetailEntry;
