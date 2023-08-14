import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  warden: {},
  wardenImages: {},
  isLoggedIn: false,
  forgotPassword: {
    email: "",
  },
  token: "",
  profilePic: {},
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addWardenInfo(state, { type, payload }) {
      state.warden = payload;
    },
    setImage(state, { type, payload }) {
      state.wardenImages[payload.photoname] = payload.photo;
    },

    setLogin(state, { type, payload }) {
      state.isLoggedIn = payload;
    },
    setForgotPasswordEmail(state, { type, payload }) {
      state.forgotPassword.email = payload.email;
    },
    setWardenAuth(state, { type, payload }) {
      state.warden = payload.data;
    },
    setToken(state, { type, payload }) {
      state.token = payload.data;
    },
    setProfilePic(state, { type, payload }) {
      state.profilePic = payload.data;
    },
  },
});

export const {
  addWardenInfo,
  setImage,
  setLogin,
  setForgotPasswordEmail,
  setWardenAuth,
  setToken,
  setProfilePic
} = authSlice.actions;
export default authSlice.reducer;
