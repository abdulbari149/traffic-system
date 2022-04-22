import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    admin: null,
    token: ""
  },
  reducers: {
    setUser(state, { payload }) {
      state.admin = {...payload.data, token: undefined }
      state.token = payload.data.token
    }
  }

})


export const { setUser } = authSlice.actions
export default authSlice.reducer