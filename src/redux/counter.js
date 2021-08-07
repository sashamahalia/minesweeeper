import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    flagCount: 0,
    turnCount: 0
  },
  reducers: {
    incrementFlags: state => {
      state.flagCount += 1
    },
    incrementTurns: state => { state.turnCount += 1
    },
    resetCount: state => {
      state.flagCount = 0;
      state.turnCount = 0;
    }
  }
})

// Action creators are generated for each case reducer function
export const { incrementFlags, incrementTurns,resetCount } = countSlice.actions

export default countSlice.reducer