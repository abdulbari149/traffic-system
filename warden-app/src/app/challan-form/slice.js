import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  challan: {},
  meta: {},
};
const challanSlice = createSlice({
  name: "challanSlice",
  initialState,
  reducers: {
    selectVoilation(state, { type, payload }) {
      const { meta, data } = payload;
      state.challan = { ...state.challan, ...data };
      state.meta = { ...state.meta, ...meta };
    },
    setChallan(state, { type, payload }) {
      const { data, meta } = payload;
      state.challan = data;
      state.meta = {...state.meta, ...meta};
    },
    resetChallanState(state, actions) {
      state.challan = {};
    },
  },
});

export const { selectVoilation, resetChallanState, setChallan } =
  challanSlice.actions;
export default challanSlice.reducer;
