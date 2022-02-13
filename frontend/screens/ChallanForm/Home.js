import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import IllustrationChallanFormHome from '../../cdn/challan-screen-img.png';
import BottomNav from '../../components/BottomNav';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {} from ""
const ChallanFormHome = () => {
  return (
    <View style={styles.sreenContainer}>
      <Header screenName={'Challan Form'} />
      <View style={styles.main}>
        <Image source={IllustrationChallanFormHome} />
        <Text
          style={styles.paragraph}
          minimumFontScale={12}
          adjustsFontSizeToFit
          numberOfLines={2}>
          Best place to write life stories and share your journey experiences.
        </Text>
        <Button title="Challan Form" onPress={() => console.log('hello')} />
      </View>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  sreenContainer: {
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  main: {
    flex: 0.75,
    marginVertical: '12%',
    marginHorizontal: '10%',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 15,
    textAlign: 'center',
    lineHeight: 25,
  },
});

export default ChallanFormHome;
