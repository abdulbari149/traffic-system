import { useLayoutEffect } from "react";
import { ArrowBackIcon } from "native-base";

export default (navigation) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ArrowBackIcon
          onPress={() => navigation.goBack()}
          style={{ color: "white" }}
        />
      ),
    });
  }, []);
};
