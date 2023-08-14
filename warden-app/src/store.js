import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authReducer from "./app/auth/slice";
import challanReducer from "./app/challan-form/slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    challan: challanReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
