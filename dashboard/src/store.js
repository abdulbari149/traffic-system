import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authReducer from "./reducers/auth"
import wardenReducer from "./reducers/warden"
import voilationReducer from "./reducers/voilation"

export default configureStore({
  reducer: {
    auth: authReducer,
    warden: wardenReducer,
    voilation:voilationReducer,
    [api.reducerPath]: api.reducer,
  },

  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});