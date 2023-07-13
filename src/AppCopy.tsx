import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from '@/router'
import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from './store/hook'
import { changeMessage } from './store/modules/counter'

function App() {
  // 返回的是一个 dispatch 类型
  const dispatch = useAppDispatch()

  // 获取 store 中的 state，订阅 store 中 state 的变化，返回需要的 state
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    // shallowEqual 使用浅层比较
    shallowEqual
  )

  const handleChangeMessage = () => {
    // 使用 useDispatch 修改 store 中的 state
    // 派发 action 来触发 state 的更新
    dispatch(changeMessage('hhhhh'))
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to={'/discover'}>发现</Link>
        <Link to={'/mine'}>我的</Link>
        <Link to={'/focus'}>我的关注</Link>
        <Link to={'/download'}>下载客户端</Link>
      </div>
      <h2>当前计数：{count}</h2>
      <h2>当前消息：{message}</h2>
      <button onClick={handleChangeMessage}>点击修改message</button>
      <Suspense fallback={<div>loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
