import React, { memo, useCallback, useState } from "react";
import { Text, ScrollView, View, Radio, Box } from "native-base";
import { voilationStyles as styles } from "../styles";
import { useGetVoilationByTypeQuery } from "src/api";
import { useDispatch, useSelector } from "react-redux";
import { selectVoilation } from "../slice";

const VoilationList = ({ route }) => {
  const dispatch = useDispatch();
  const {
    data: voilationData = [],
    isSuccess,
    isFetching,
    isLoading,
    error,
    isError,
  } = useGetVoilationByTypeQuery({
    v_type: route.key,
  });

  if (isFetching || isLoading) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>An error Occured Try again</Text>
      </View>
    );
  }



  const handleChange = (nextValue) => {
    const { code, voilation, price, _id } = voilationData.data[nextValue];
    dispatch(
      selectVoilation({
        data: { voilation_code: code, voilation, fine_imposed: price },
        meta: { voilation_id: _id },
      })
    );
  };

  return (
    <ScrollView mt="10px">
      <Radio.Group onChange={handleChange}>
        {isSuccess &&
          voilationData?.data.map((v, index) => (
            <Box key={v._id} style={styles.container}>
              <Radio value={index} accessibilityLabel="check the voilation" />
              <Text style={styles.text}>{v?.voilation}</Text>
            </Box>
          ))}
      </Radio.Group>
    </ScrollView>
  );
};

export default memo(VoilationList);
