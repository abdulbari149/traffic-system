import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Routes from "./navigation";
import { Provider as ReactReduxProvider } from "react-redux";
import store from "./store"
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <ReactReduxProvider store={store}>

          <Routes />
        </ReactReduxProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
