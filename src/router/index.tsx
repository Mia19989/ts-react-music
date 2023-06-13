import Discover from '@/views/discover'
import Download from '@/views/download'
import React from 'react'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/download',
    element: (
      <Download name="hcc" age={12}>
        测试一下
      </Download>
    )
  }
]

export default routes
