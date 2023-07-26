import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayBar from './views/player/app-play-bar'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback={<div>loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <AppPlayBar />
    </div>
  )
}

export default App
