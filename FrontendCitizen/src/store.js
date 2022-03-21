import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/index";
import authReducer from "./app/auth/slice/AuthSlice"
export default configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
