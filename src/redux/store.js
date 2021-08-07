import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counter";
import mineReducer from "./mines";

export default configureStore({
  reducer: {
    count: countReducer,
    mines: mineReducer
  }
});