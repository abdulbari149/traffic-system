import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const challanSlice = createSlice({
  name: "challanSlice",
  initialState,
  reducers: {
    setChallan(state, { payload }) {
      state = payload.data;
    },
  },
});
export const { setChallan } = challanSlice.actions;

export default challanSlice.reducer;
