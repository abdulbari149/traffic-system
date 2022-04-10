import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  warden: {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  },
  wardenImages: {},
  isLoggedIn: false,
  forgotPassword: {
    email: "",
  },
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
  },
});

export const {
  addWardenInfo,
  setImage,
  setLogin,
  setForgotPasswordEmail,
} = authSlice.actions;
export default authSlice.reducer;
