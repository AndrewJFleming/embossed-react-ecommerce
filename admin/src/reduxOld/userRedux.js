import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    isFetching: false,
    error: false,
  },
  // initialState: {
  //   currentUser: {},
  //   isFetching: false,
  //   error: false,
  // },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    clearUser: (state, action) => {
      state.currentUser = {};
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
