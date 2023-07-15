import React, { memo, Suspense } from 'react'
import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './child-cpns/nav-bar/NavBar'

interface IProps {
  children?: ReactNode
}

const Discover: React.FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
