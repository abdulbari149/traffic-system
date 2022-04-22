import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authReducer from "./reducers/auth"
import wardenListReducer from "./reducers/wardenList"

export default configureStore({
  reducer: {
    auth: authReducer,
    wardenList: wardenListReducer,
    [api.reducerPath]: api.reducer,
  },

  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});