import { createSlice } from '@reduxjs/toolkit'

// 创建 slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    message: 'this is a message'
  },
  reducers: {
    changeMessage: (state, { payload }) => {
      state.message = payload
    }
  }
})

export const { changeMessage } = counterSlice.actions
export default counterSlice.reducer
