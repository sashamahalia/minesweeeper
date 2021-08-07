import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
  name: 'flag',
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
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { incrementFlags, incrementTurns } = countSlice.actions

export default countSlice.reducer