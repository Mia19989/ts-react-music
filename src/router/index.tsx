import Discover from '@/views/discover'
import React from 'react'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes
