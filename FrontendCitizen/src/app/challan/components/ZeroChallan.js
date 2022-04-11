import React from "react";

import { Image, Text } from "native-base";
import { useSelector } from "react-redux";
const ZeroChallan = () => {
  const { citizen } = useSelector((state) => state.auth);
  return (
    <>
      <Image
        source={require("../../../assets/images/zero-challan.png")}
        alignSelf="center"
        size={180}
        width={260}
        marginTop={5}
      />
      <Text fontSize="2xl" alignSelf="center" paddingTop={5}>
        Zero Challan
      </Text>
      <Text
        alignSelf="center"
        textAlign="center"
        fontSize={16}
        style={{ paddingHorizontal: 40 }}
      >
        Hey {citizen?.name ?? "there"}, you didn’t have any challan right now
        because you follow the traffic rules and that’s great. Keep it up!
      </Text>
    </>
  );
};

export default ZeroChallan;
