import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/index";
import authReducer from "./app/auth/slice"
import challanReducer from "./app/auth/slice"
export default configureStore({
  reducer: {
    auth: authReducer,
    challan: challanReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
