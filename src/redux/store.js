import { configureStore } from "@reduxjs/toolkit";
import flagReducer from "./counter";

export default configureStore({
  reducer: {
    flags: flagReducer
  }
});