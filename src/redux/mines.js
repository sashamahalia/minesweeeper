import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

export const mineSlice = createSlice({
  name: 'mine',
  initialState: {
    bombs: [..._.range(40)].map(num => _.random(0, 256)),
    gameOver: false
  },
  reducers: {
    gameOver: state => {
      state.gameOver = true
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
export const { gameOver } = mineSlice.actions

export default mineSlice.reducer