import React from 'react';

import { NativeBaseProvider, extendTheme } from 'native-base';

import Stack from './navigation';
import { Provider } from 'react-redux';
import store from './store';
const theme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins-Light',
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
});

const App = () => {
  return (<Provider store={store}>
    <NativeBaseProvider theme={theme}>
      <Stack />
    </NativeBaseProvider>
  </Provider>
  )
}

export default App; 