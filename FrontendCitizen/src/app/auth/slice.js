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
    setToken(state, { payload }) {
      state.token = payload.data;
    },
    setUser(state, { payload }){
      state.citizen = {...payload.data, token:undefined}
      state.accessToken = payload.data.token
    },
    setPasswordToken(state, { payload }){
      state.passwordToken = payload.data
    }
  },
});
export const { setToken, setUser, setLogin, setPasswordToken } = AuthSlice.actions;

export default AuthSlice.reducer;
