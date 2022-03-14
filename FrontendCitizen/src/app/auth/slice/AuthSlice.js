import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    isAuthenticated: false,
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
});

export default AuthSlice.reducer;