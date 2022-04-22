import { createSlice  } from "@reduxjs/toolkit"

const wardenListSlice = createSlice({
  name: "wardenList",
  initialState: {
    approvalList: [],
    declineList: [],
    profilePics: []
  },
  reducers: {
    setWardenApprovalList(state, { payload }){
      state.approvalList = payload.data
    },
    setWardenImage(state, {  payload }){
      state.profilePics = [...state.profilePics, payload.data]
    }
  }
})

export const { setWardenApprovalList, setWardenImage } = wardenListSlice.actions
export default wardenListSlice.reducer