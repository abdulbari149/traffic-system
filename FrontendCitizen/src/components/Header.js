import React, { useMemo } from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { Box, Button } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import { setLogin, setUser, setAccessToken } from "app/auth/slice";
import { setAuthToken } from "utils/async-storage";
import { useState } from "react";
import Loader from "./Loader";
import _ from "lodash";
import NumberFormat from "react-number-format";
const Header = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { citizen } = useSelector((state) => state.auth);
  const { challans } = useSelector((state) => state.challan);
  const totalFine = useMemo(() => {
    return challans
      .filter((c) => !c?.paid)
      .reduce((total, challan) => total + challan?.fine_imposed, 0);
  }, [challans]);
  const handleLogout = async () => {
    setLoading(true);
    // await setAuthToken("access", "");
    // dispatch(setUser({ data: {} }));
    // dispatch(setAccessToken({ data: "" }));
    // dispatch(setLogin(false));
    // setLoading(false);
    setTimeout(() => setLoading(false), 200);
  };
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.profile}>
          <Image
            alt="Profile Pic"
            source={require("../assets/images/citizen's-profile.png")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.profileDetail}>
          <Box style={styles.profileRow}>
            <Text style={[styles.text, styles.boldText]}>Name: </Text>
            <Text style={styles.text}>
              {citizen.name
                ? _.capitalize(citizen.name)
                : _.capitalize(citizen.first_name) +
                  " " +
                  _.capitalize(citizen.last_name)}
            </Text>
          </Box>
          <Box style={styles.profileRow}>
            <Text style={[styles.text, styles.boldText]}>Pending Amount: </Text>
            <NumberFormat
              value={totalFine}
              style={styles.text}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rs. "}
              renderText={(value, props) => <Text {...props}>{value}</Text>}
            />
          </Box>
        </View>
        <Pressable
          android_ripple={true}
          onPress={handleLogout}
          style={styles.logout}
        >
          <Icon name="logout" size={30} color="#fff" />
        </Pressable>
      </View>
      {loading && (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
    backgroundColor: "#B21B1Bcc"
  },
  loaderContainer: {
    position: "absolute",
    zIndex: 20,
    backgroundColor: "#00000033",
    height: "100%",
    width: "100%"
  },
  pageNavigationText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000"
  },
  avatar: {
    borderRadius: 1000,
    width: 70,
    height: 70,
    shadowColor: "#000040"
  },
  profileRow: {
    display: "flex",
    flexDirection: "row",
    color: "#fff"
  },
  profileDetail: {
    display: "flex",
    paddingVertical: 10
  },
  text: {
    color: "#f4f4f4",
    fontSize: 14,
    paddingRight: 7,
    paddingBottom: 5
  },
  boldText: {
    fontWeight: "600"
  },
  logout: {
    height: "100%",
    display: "flex",
    marginLeft: "auto",
    marginRight: 10,
    paddingVertical: 18
  }
});

export default Header;
