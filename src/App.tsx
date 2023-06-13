import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from '@/router'

function App() {
  return (
    <div className="App">
      <Link to={'/discover'}>发现</Link>
      <Link to={'/mine'}>我的</Link>
      <Link to={'/focus'}>我的关注</Link>
      <Link to={'/download'}>下载客户端</Link>
      <Suspense fallback={<div>loading...</div>}>
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
