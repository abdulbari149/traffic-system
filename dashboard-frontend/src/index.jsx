import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ScopedCssBaseline>
        <App />
      </ScopedCssBaseline>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
