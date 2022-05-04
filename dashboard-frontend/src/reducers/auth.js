import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    admin: null,
    token: ""
  },
  reducers: {
    setUser(state, { payload }) {
      state.admin = payload.data
    },
    setToken(state, { payload }){
      console.log({ payload })
      state.token = payload.data
    }
  } 
  
})


export const { setUser, setToken } = authSlice.actions
export default authSlice.reducer