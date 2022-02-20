import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Routes from "./rnavigation";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
