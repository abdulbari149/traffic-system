import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = ({screenName}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logo}>Logo</Text>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={styles.pageNavigationText}>
        {screenName}
      </Text>
      <View style={styles.profile}>
        <Image  source={require("../assets/warden's-profile.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageNavigationText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {},
  profile: {
    borderColor: '#0038FF',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 25
  },
});

export default Header;
