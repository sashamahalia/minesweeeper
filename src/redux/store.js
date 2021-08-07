import { configureStore } from "@reduxjs/toolkit";
import flagReducer from "./counter";
import mineReducer from "./mines";

export default configureStore({
  reducer: {
    flags: flagReducer,
    mines: mineReducer
  }
});