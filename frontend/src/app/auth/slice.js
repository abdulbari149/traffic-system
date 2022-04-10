import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authenticaton",
  initialState: {
    warden: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      confirm_password: "",
      profile_pic: {
        src: "",
        alt: "",
        base64EncodedImage: "",
        maxSize: 0,
        memeType: "",
      },

      idCard: {
        frontImage: {
          src: "",
          alt: "",
          id: 0,
          base64EncodedImage: "",
          maxSize: 0,
          memeType: "",
        },
        backImage: {
          src: "",
          alt: "",
          id: "",
          base64EncodedImage: "",
          maxSize: 0,
          memeType: "",
        },
      },
    },
  },

  reducers: {
    login: (state, action) => {
      
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
