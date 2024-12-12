import { createSlice } from "@reduxjs/toolkit";

// Load token from localStorage
const savedToken = localStorage.getItem('authToken');

const initialState = {
  token: savedToken || null,
};

const tokenSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('authToken', action.payload); // Persist token
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem('authToken'); // Clear token from storage
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;