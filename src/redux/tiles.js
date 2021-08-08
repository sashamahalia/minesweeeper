import { createSlice } from '@reduxjs/toolkit';
import { FaBomb } from "react-icons/fa";
import { CgFlagAlt } from "react-icons/cg";

export const tileSlice = createSlice({
  name: 'tile',
  initialState: {
    tile: 's'
    
  },
  reducers: {
    isBomb: state => {
      state.tile = <FaBomb />
    },
    isTouchingBomb: (state, action) => {
      state.tile = action.payload
    },
    isFlagged: state => {
      state.tile = <CgFlagAlt />
    }
  }
})

// Action creators are generated for each case reducer function
export const { isBomb, isTouchingBomb, isFlagged } = tileSlice.actions

export default tileSlice.reducer