import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "native-base";
import Icon from "react-native-vector-icons/Fontisto";
import { useSelector } from "react-redux";
import styles from "./styles";
import _ from "lodash";
import { useGetChallanCountQuery } from "src/api";
import ProfileBgImage from "src/cdn/profile-bg.png";
const WardenProfile = () => {
  const { warden, profilePic } = useSelector((state) => state.auth);
  console.log({ warden });
  const { data, currentData, error, isSuccess, isError } =
    useGetChallanCountQuery(null, {
      pollingInterval: 1 * 15 * 60 * 100,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    });
  const profilephoto = {
    uri: `http://10.0.2.2:5000/api/image/warden/file/${profilePic?.url}`,
  };
  console.log({ profilephoto });
  const [yearlyCount, setYearlyCount] = useState(
    currentData?.yearlyCount ?? ""
  );
  const [monthlyCount, setMonthlyCount] = useState(
    currentData?.monthlyCount ?? ""
  );

  useEffect(() => {
    if (isSuccess) {
      setMonthlyCount(data?.monthlyCount);
      setYearlyCount(data?.yearlyCount);
    }
  }, [isSuccess]);

  return (
    <ScrollView _contentContainerStyle={styles.scrollView}>
      <Image source={ProfileBgImage} alt="sea" style={styles.coverphoto} />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          position: "absolute",
          top: 60,
          height: "100%",
          lineHeight: 45,
          zIndex: 100,
          textAlign: "center",
          width: "100%",
          color: "white",
        }}
      >
        {"W A R D E N ' S    P R O F I L E"}
      </Text>
      <Image source={profilephoto} alt="  " style={styles.profilepic} />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          width: "100%",
          textAlign: "center",
          padding: 10,
          color: "#296BFF",
        }}
      >
        {_.capitalize(warden.name)}
      </Text>
      <View style={styles.profileBigCard}>
        <View style={styles.twoCardContainer}>
          <View style={{ ...styles.profileSmallCard, marginRight: 10 }}>
            <Text style={styles.profileKeys}>Designation</Text>
            <Text fontSize="2xl" style={styles.profileValues}>
              {warden?.designation}
            </Text>
          </View>
          <View style={styles.profileSmallCard}>
            <Text style={styles.profileKeys}>Id</Text>
            <Text fontSize="2xl" style={styles.profileValues}>
              {warden?.service_id}
            </Text>
          </View>
        </View>
        <View style={styles.profileBigInnerCard}>
          <Text style={styles.profileKeys}>Name</Text>
          <Text fontSize="2xl" style={styles.profileValues}>
            {_.capitalize(
              warden?.name ?? warden.frst_name + " " + warden?.last_name
            )}
          </Text>
        </View>
      </View>
      <View style={styles.profileChallanContainer}>
        <View style={{ ...styles.profileChallanCard, marginRight: 10 }}>
          <Icon name="date" style={styles.calendarIcon} />
          <Text fontSize="3xl" style={styles.challanCount}>
            {monthlyCount}
          </Text>
          <Text style={styles.challanCountHeading}>Monthly Challan Count</Text>
        </View>
        <View style={styles.profileChallanCard}>
          <Icon name="date" style={styles.calendarIcon} />
          <Text fontSize="3xl" style={styles.challanCount}>
            {yearlyCount}
          </Text>
          <Text style={styles.challanCountHeading}>Yearly Challan Count</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default WardenProfile;
