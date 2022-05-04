import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "native-base";
import Icon from "react-native-vector-icons/Fontisto";
import { useSelector } from "react-redux";
import styles from "./styles";
import _ from "lodash";
import { useGetChallanCountQuery } from "src/api";

const WardenProfile = () => {
  const { warden, profilePic } = useSelector((state) => state.auth);

  const { data, currentData, error, isSuccess, isError } =
    useGetChallanCountQuery(null, {
      pollingInterval: 1 * 60 * 60 * 100,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    });
  const profilephoto = {
    uri: `http://192.168.1.102:5000/api/image/warden/file/${profilePic.url}`,
  };
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

  const coverphoto = {
    uri: "https://res.cloudinary.com/saadfarhan/image/upload/v1644958504/sea_hqy35u.png",
  };

  return (
    <ScrollView _contentContainerStyle={styles.scrollView}>
      <Image source={coverphoto} alt="sea" style={styles.coverphoto} />
      <Image source={profilephoto} alt="hooman" style={styles.profilepic} />
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
            {_.capitalize(warden.name)}
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
