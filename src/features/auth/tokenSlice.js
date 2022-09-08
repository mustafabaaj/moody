import { createSlice } from "@reduxjs/toolkit";
const initialState = {isAuth: false};

export const getAccessTokenSlice = createSlice({
  name: "getAccessToken",
  initialState,
  reducers: {
    isAuthenticated(state) {
        state.isAuth = true
    },
    isNotAuthenticated(state){
        state.isAuth = false
    }
  },
});

export const { isAuthenticated,isNotAuthenticated } = getAccessTokenSlice.actions;

export default getAccessTokenSlice.reducer;
