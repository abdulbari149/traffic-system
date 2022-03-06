import React from 'react';
import { NativeBaseProvider, View } from 'native-base';
import Stack from './rnavigation';

const App = () => {
  return (<NativeBaseProvider>
    <Stack />
  </NativeBaseProvider>)
}

export default App; 