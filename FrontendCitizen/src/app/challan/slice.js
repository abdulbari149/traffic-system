import { createSlice } from "@reduxjs/toolkit";

const challanSlice = createSlice({
  name: "challanSlice",
  initialState: {
    challans: [],
    detailsAccordion: {
      name: "offender"
    }
  },
  reducers: {
    setChallans(state, { payload }) {
      state.challans = payload.data.sort((c, nC) => !c.paid);
    },
    openDetailsAccordion(state, { payload }){
      state.detailsAccordion.name = payload.name
    }
  },
});
export const { setChallans, openDetailsAccordion } = challanSlice.actions;

export default challanSlice.reducer;
