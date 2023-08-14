import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  isLoggedIn: false,
  citizen: null,
  passwordToken: ""
};

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLogin(state, { payload }) {
      state.isLoggedIn = payload;
    },
    setAccessToken(state, { payload }) {
      state.accessToken = payload.data;
    },
    setUser(state, { payload }){
      state.citizen = payload.data
    },
    setPasswordToken(state, { payload }){
      state.passwordToken = payload.data
    }
  },
});
export const { setAccessToken, setUser, setLogin, setPasswordToken } = AuthSlice.actions;

export default AuthSlice.reducer;
