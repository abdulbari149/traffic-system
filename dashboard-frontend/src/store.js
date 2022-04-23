import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authReducer from "./reducers/auth"
import wardenListReducer from "./reducers/wardenList"
import voilationReducer from "./reducers/voilation"

export default configureStore({
  reducer: {
    auth: authReducer,
    wardenList: wardenListReducer,
    voilation:voilationReducer,
    [api.reducerPath]: api.reducer,
  },

  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});