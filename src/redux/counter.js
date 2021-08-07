import { createSlice } from '@reduxjs/toolkit'

export const flagSlice = createSlice({
  name: 'flag',
  initialState: {
    count: 0
  },
  reducers: {
    incrementFlags: state => {
      state.count += 1
    },
    // decrement: state => {
    //   state.count -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { incrementFlags } = flagSlice.actions

export default flagSlice.reducer