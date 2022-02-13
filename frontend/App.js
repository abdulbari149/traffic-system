import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Stack from './rnavigation';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}


export default App;
