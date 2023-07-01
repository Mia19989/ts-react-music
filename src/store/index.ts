import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './modules/counter'

// 创建 store
const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
})

// 获取 store 中 state 类型
// 1.获取 getState 函数类型
type GetStateType = typeof store.getState
// 2.获取 getState函数 返回值的类型
export type IRootStateType = ReturnType<GetStateType>

// 获取 store 中 dispatch 类型
export type DispatchType = typeof store.dispatch

export default store
