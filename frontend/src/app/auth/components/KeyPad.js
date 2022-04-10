import { Box } from "native-base";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button, TextBtn } from "src/components";
import { keypadStyles as styles } from "../styles";
const arrayOfNumbers = [
  { key: 1 },
  { key: 2 },
  {
    key: 3,
  },
  { key: 4 },
  { key: 5 },
  { key: 6 },
  { key: 7 },
  { key: 8 },
  { key: 9 },
  { key: 10 },
  { key: 0 },
  { key: 12 },
];

const KeyPad = ({
  handleSubmit,
}) => {
  const [empties, setEmpties] = useState([
    { key: 1, value: " " },
    { key: 2, value: " " },
    { key: 3, value: " " },
    { key: 4, value: " " },
  ]);
  const [counter, setCounter] = useState(0);
  const [code, setCode] = useState("");
  const [digitDisabled, setDigitDisabled] = useState(false);
  const [clearDisabled, setClearDisabled] = useState(false);
  const [allowClear, setAllowClear] = useState(false);

  useEffect(() => {
    if (code.length === 4) {
      setClearDisabled(false);
    }
  
  }, [code, counter]);

  const updateEmptyValues = (value, index) => {
    setEmpties((emp) =>
      emp.map((e, idx) => (idx === index ? { ...e, value } : e))
    );
  };

  const onEnterDigit = (num) => {
    if (counter < 4) {
      setCounter(counter + 1);
      updateEmptyValues(num, counter);
      setClearDisabled(false);
    }
    console.log({ num, empties, counter });
  };

  const onRemoveDigit = () => {
    if (counter - 1 >= 0) {
      setCounter(counter - 1);
      updateEmptyValues(" ", counter - 1);
      setDigitDisabled(false);
    } else {
      setAllowClear(true);
    }
  };

  const renderItemCell = ({ item, index }) => {
    if (index === 9) {
      return <View style={[styles.round]} />;
    } else if (index === 11) {
      return (
        <TouchableOpacity
          style={[styles.round, styles.centerAlignment]}
          onPress={onRemoveDigit}
          disabled={clearDisabled}
        >
          <Image
            source={require("src/cdn/delete.png")}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.round, styles.centerAlignment]}
          onPress={() => onEnterDigit(item.key)}
          disabled={digitDisabled}
        >
          <Text style={styles.digit}>{item.key}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.enterView}>
        {empties.map((item) => (
          <View key={item.key} style={styles.digitView}>
            <Text style={styles.digit}>{item.value}</Text>
            <View
              style={[
                styles.redSpace,
                { backgroundColor: "rgba(0, 56, 255, 0.15)" },
              ]}
            />
          </View>
        ))}
      </View>
      <Box flexDirection="row" alignItems="center" px="25" mt="-2" mb="4">
        Didn't Receive Code?
        <TextBtn
          text="Resend"
          onPress={() => navigation.navigate(SIGNUP_SCREEN)}
          styles={{ fontWeight: "bold", paddingLeft: 5 }}
        />
      </Box>
      <Button
        title="Verify Account"
        disabled={counter < 4}
        onPress={() =>{
          handleSubmit(empties.reduce((c, val) => c + val.value.toString(), ""))
        }}
        style={{
          width: 200,
          marginHorizontal: 20,
          marginBottom: 10,
        }}
      />
      <View style={styles.flatcontainer}>
        <FlatList
          style={styles.flatlist}
          data={arrayOfNumbers}
          renderItem={renderItemCell}
          numColumns={3}
        />
      </View>
    </View>
  );
};

export default KeyPad;
