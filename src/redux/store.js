import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counter";
import mineReducer from "./mines";
import tileReducer from "./tiles"

export default configureStore({
  reducer: {
    count: countReducer,
    mines: mineReducer,
    tiles: tileReducer
  }
});