import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

const reducer = combineReducers({
  counter: counterSlice,
});
const store = configureStore({ reducer });

export default store;
