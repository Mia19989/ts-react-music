import React, { memo, Suspense } from 'react'
import type { ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { discoverMenu } from '@/assets/data/local_data'
import { DiscoverNav } from './style'

interface IProps {
  children?: ReactNode
}

const NavBar: React.FC<IProps> = () => {
  return (
    <DiscoverNav>
      <div className="nav wrap-v1 ">
        {discoverMenu.map((item) => (
          <div className="item" key={item.link}>
            <NavLink to={item.link}>{item?.title}</NavLink>
          </div>
        ))}
      </div>
    </DiscoverNav>
  )
}

export default memo(NavBar)
