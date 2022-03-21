import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLogin(state, { payload }) {
      state.isLoggedIn = payload;
    },
  },
});

export default AuthSlice.reducer;
