import React from 'react';
import {Text} from 'native-base';

const VerificationScreen = () => {
  return (
    <View styles={styles.container}>
      <KeyPad onEnteredPincode={(code) => console.log(code)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    height: "100%",
  },
});

export default VerificationScreen;
