import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: React.FC<IProps> = () => {
  /** 展示头部导航栏路由/超链接 */
  const showItem = (item: any) => {
    if (item.type === 'path') {
      return (
        <Link to={item.link} className="icon">
          {item.title}
        </Link>
      )
    } else {
      // rel="noreferrer" target="_blank" - 点击超链接打开一个新的页面
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          {/* 路由 - 使用备用数据 */}
          <div className="title-list">
            {headerTitles.map((item) => (
              <div key={item.title} className="item">
                {showItem(item)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
