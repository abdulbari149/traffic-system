import React, { useState } from "react";
import styles from "../styles";
import { Button, Text, View, Flex, Box } from "native-base";

import Icon from "react-native-vector-icons/AntDesign";

const ChallanDetailAccordian = () => {
  const [open, isOpen] = useState(false);

  console.log(open);

  return (
    <View style={{ marginTop: 15 }}>
      <View style={styles.accordinContainer}>
        <Text style={{ fontSize: 18, color: "#444444", fontWeight: "bold" }}>
          Offender
        </Text>
        <Button style={styles.accordinButton} onPress={() => isOpen(!open)}>
          <Icon
            name={open ? "up" : "down"}
            size={12}
            color="black"
            style={{ fontWeight: "bold" }}
          />
        </Button>
      </View>
      {open && (
        <Flex py={5} px={35} direction="row" alignItems="center" >
          <Box style={styles.accordinLabelContainer}>
						<Text style={styles.accordinLabel}>Name</Text>
						<Text style={styles.accordinLabel}>CNIC</Text>
						<Text style={styles.accordinLabel}>District</Text>
					</Box>
					<Box style={styles.accordinValueContainer}>
						<Text style={styles.accordinValue}>Abdul bari</Text>
						<Text style={styles.accordinValue}>Abdul bari</Text>
						<Text style={styles.accordinValue}>Abdul bari</Text>
					</Box>
        </Flex>
      )}
    </View>
  );
};

export default ChallanDetailAccordian;
