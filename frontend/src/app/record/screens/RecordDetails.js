import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Box } from "native-base";
import styles from "../styles";
import { ImageBackground } from "react-native";
import RecordDetailEntry from "../components/RecordDetailEntry";
import { useGetChallanRecordDetailsQuery } from "src/api";
import _ from "lodash";
import { convertDate } from "src/utils/convert-date";
import { Loader } from "@components"
const RecordDetail = ({ navigation, route }) => {
  const { challanId } = route.params;

  const { data, error, isSuccess, isError, isLoading } = useGetChallanRecordDetailsQuery({
    id: challanId,
  });
  const [image, setImage] = useState("");
  useEffect(() => {
    if (isSuccess) {
      setImage(data.data.citizen.images[0].filename);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isError) {
      console.log({ error });
    }
  }, [isError]);

  const profilephoto = {
    uri: `http://192.168.1.102:5000/api/image/citizen/file/${image}`,
  };

  const coverphoto = {
    uri: "https://res.cloudinary.com/saadfarhan/image/upload/v1643909305/loginBg_rcsqrv.png",
  };

  if(isLoading){
    return <Loader />
  }

  return (
    <ScrollView _contentContainerStyle={styles.scrollView}>

    
        
          <ImageBackground source={coverphoto}>
            <Box
              style={styles.paidLabelContainer}
              _text={{
                style: styles.paidLabelText,
              }}
            >
              {data?.data.paid ? "Paid" : "Unpaid"}
            </Box>
            {image !== "" ? (
              <Image source={profilephoto} alt="hooman" style={styles.profilepic} />
            ) : null}
            <Text style={styles.username}>
              {isSuccess
                ? _.capitalize(
                  data.data.citizen.first_name + " " + data.data.citizen.last_name
                )
                : ""}
            </Text>
          </ImageBackground>
          <View style={styles.recordDetails}>
            {isSuccess && (
              <>
                <RecordDetailEntry
                  item={{ title: "Challan Number", value: data.data.psid_no }}
                />
                <RecordDetailEntry
                  item={{
                    title: "Voilation Type",
                    value: _.capitalize(data.data.voilation.v_type.trim()),
                  }}
                />
                <RecordDetailEntry
                  item={{
                    title: "Voilation Code",
                    value: data.data.voilation.code,
                  }}
                />
                <RecordDetailEntry
                  item={{
                    title: "Voilation",
                    value: data.data.voilation.voilation,
                  }}
                />

                <RecordDetailEntry
                  item={{
                    title: "Vehicle Registration Number",
                    value: data.data.vehicle_registration_no,
                  }}
                />
                <RecordDetailEntry
                  item={{
                    title: "Address",
                    value:
                      _.capitalize(data.data.place_of_voilation) +
                      ", " +
                      _.capitalize(data.data.division) +
                      ", " +
                      _.capitalize(data.data.province),
                  }}
                />
                <RecordDetailEntry
                  item={{
                    title: "Fine Imposed",
                    value: data.data.fine_imposed,
                  }}
                />
                <RecordDetailEntry
                  item={{
                    title: "Date",
                    value: data.data.createdAt
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-"),
                  }}
                />
              </>
            )}
          </View>
      
    </ScrollView>
  );
};

export default RecordDetail;
