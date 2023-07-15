import React, { memo } from 'react'
import type { ReactNode } from 'react'
import NavBar from './child-cpns/nav-bar/NavBar'

interface IProps {
  children?: ReactNode
}

const Discover: React.FC<IProps> = () => {
  return (
    <div>
      <NavBar />
    </div>
  )
}

export default memo(Discover)
