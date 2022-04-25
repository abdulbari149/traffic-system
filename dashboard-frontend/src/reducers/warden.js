import { createSlice } from "@reduxjs/toolkit";

const wardenSlice = createSlice({
  name: "warden",
  initialState: {
    approval: [],
    wardenId: "",
    declineId: "",
    decline: []
  },
  reducers: {
    setWardenApprovalList(state, { payload }) {
      state.approval = payload.data;
    },
    setWardenDeclineList(state, { payload }) {
      state.decline = payload.data;
    },
    selectWardenDecline(state, { payload }){
      state.declineId = payload.id
    },
    setWardenId(state, { payload }) {
      state.wardenId = payload.id;
    },
    removeWarden(state, { payload }) {
      if (payload.action === "approve") {
        state.approval = state.approval.filter((w) => w._id !== payload.id);
      } else if (payload.action === "decline") {
        state.decline = state.decline.filter((w) => w._id !== payload.id);
      }
    }
  }
});

export const {
  setWardenApprovalList,
  setWardenDeclineList,
  setWardenId,
  removeWarden,
  selectWardenDecline
} = wardenSlice.actions;
export default wardenSlice.reducer;
