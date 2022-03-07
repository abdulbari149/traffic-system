import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Stack from './rnavigation';

const App = () => {
  return (<NativeBaseProvider>
    <Stack />
  </NativeBaseProvider>)
}

export default App; 