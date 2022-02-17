import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';

const BottomNav = () => {
  const menu = ['form', 'record', 'you'];
  return (
    <View style={styles.container}>
      {menu.map((item, idx) => (
        <Pressable onPress={() => console.log(item)}>
          <Icon name="form-outlined" type="antdesign" />
          <Text key={idx} style={styles.text}>
            {item}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
    backgroundColor: '#0038ff',
  },
  text: {
    textTransform: 'capitalize',
    textAlign: 'center',
    flex: 1,
    zIndex: 2,
    color: 'white',
  },
});

export default BottomNav;
