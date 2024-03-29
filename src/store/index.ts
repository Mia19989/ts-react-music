import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './modules/counter'
import RecommendReducer from '@/views/discover/child-views/recommend/store'

// 创建 store
const store = configureStore({
  reducer: {
    counter: CounterReducer,
    recommend: RecommendReducer
  }
})

// 获取 store 中 state 类型
// 写法一
// const state = store.getState()
// type IState = typeof state

// 写法二
// 1.获取 getState 函数类型
type GetStateType = typeof store.getState
// 2.获取 getState函数 返回值的类型
export type IRootStateType = ReturnType<GetStateType>

// 获取 store 中 dispatch 类型
export type DispatchType = typeof store.dispatch

export default store
