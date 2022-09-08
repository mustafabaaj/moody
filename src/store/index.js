import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { spotifyAPIs } from "../api/spotifyService";
import getAccessTokenSlice from "../features/auth/tokenSlice";

const reducer = combineReducers({
  [spotifyAPIs.reducerPath]: spotifyAPIs.reducer,

  getToken: getAccessTokenSlice,
});
const store = configureStore({
  reducer,
});

export default store;
