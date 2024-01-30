import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserAllowed: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsUserAllowed: state => {
      state.isUserAllowed = !state.isUserAllowed;
    },
  },
});

export const { setIsUserAllowed } = authSlice.actions;
export const authReducer = authSlice.reducer;
