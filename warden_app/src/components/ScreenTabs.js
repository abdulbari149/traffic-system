import React, { memo, useState } from 'react';
import { Dimensions, StatusBar, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Box } from 'native-base';

const initialLayout = {
  width: Dimensions.get('window').width,
};

const ScreenTabs = ({ routes: routesArr, sceneMap }) => {
  console.log('rendering screen tabs', sceneMap)
  const renderScene = SceneMap(sceneMap);

  const [index, setIndex] = useState(0);
  const [routes] = useState(routesArr);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box
        flexDirection='row'
        alignItems='center'
        bg='#D9E1FF'
        p='2'
        width='100%'
        m='auto'
        borderRadius='100px'
      >
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? '#000' : '#1f2937';
          const borderColor = index === i ? 'cyan.500' : 'coolGray.200';
          return (
            <Box
              backgroundColor={index === i ? '#FFFFFF' : 'transparent'}
              p='8px'
              cursor='pointer'
              borderRadius='100'
              key={i}
              height='40px'
              width='50%'
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
                style={{ width: '100%', height: '100%' }}
              >
                <Animated.Text
                  style={{
                    color,
                    textAlign: 'center',
                    fontWeight: 'normal',
                    fontSize: 16,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
      }}
    />
  );
};

export default memo(ScreenTabs);
