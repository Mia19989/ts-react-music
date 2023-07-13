import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// 创建 slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    message: 'this is a message'
  },
  reducers: {
    // PayloadAction<string> 中的泛型用来指定 action 中 psyload 的类型
    changeMessage: (state, { payload }: PayloadAction<string>) => {
      state.message = payload
    }
  }
})

export const { changeMessage } = counterSlice.actions
export default counterSlice.reducer
