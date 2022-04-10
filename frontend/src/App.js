import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Routes from "./navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./store";
import { Provider as ReactReduxProvider } from "react-redux";
const queryClient = new QueryClient();
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <ReactReduxProvider store={store}>
            <Routes />
          </ReactReduxProvider>
        </QueryClientProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
