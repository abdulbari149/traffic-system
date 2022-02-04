import 'react-native-gesture-handler';
import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/rnavigation';

const App = () => {
  return (<NavigationContainer>
    <NativeBaseProvider>
      <Stack />
    </NativeBaseProvider>
  </NavigationContainer>);
}

export default App;