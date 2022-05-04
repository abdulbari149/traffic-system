import React, { useState, useMemo } from "react";
import styles from "../styles";
import { Button, Text, View, Flex, Box } from "native-base";
import _ from "lodash";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { openDetailsAccordion } from "../slice";

const DetailAccordion = (props) => {
  const { name } = useSelector((state) => state.challan.detailsAccordion);
  const dispatch = useDispatch()
  const open = useMemo(() => props.name === name, [name])
  const handleAccordion = () => { 
    dispatch(openDetailsAccordion({ name: props.name }))
  }


  return (
    <View style={{ marginTop: 15 }}>
      <View style={styles.accordionContainer}>
        <Text style={{ fontSize: 18, color: "#444444", fontWeight: "bold" }}>
          {_.capitalize(props.name)}
        </Text>
        <Button style={styles.accordionButton} onPress={handleAccordion}>
          <Icon
            name={open ? "up" : "down"}
            size={12}
            color="black"
            style={{ fontWeight: "bold" }}
          />
        </Button>
      </View>
      {open && (
        <Flex py={5} px={15} alignItems="center">
          {props.data.map((item) => (
            <Box key={item.id} style={styles.accordionItem}>
              <Text style={styles.accordionLabel}>{item.title}</Text>
              <Text style={styles.accordionValue}>{item.value}</Text>
            </Box>
          ))}
        </Flex>
      )}
    </View>
  );
};

export default DetailAccordion;
