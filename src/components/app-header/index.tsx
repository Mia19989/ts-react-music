import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}

interface Item {
  title: string
  type: string
  link: string
}

const AppHeader: React.FC<IProps> = () => {
  /** 展示头部导航栏 路由/超链接 */
  const showItem = (item: Item) => {
    // 点击的样式逻辑 - 保证页面刷新后，匹配到刷新前的路由组件
    // 利用 NavLink 特点：当路径和 to 属性值匹配的时候，自动给当前导航组件添加默认 className 为 active 样式
    if (item.type === 'path') {
      return (
        <NavLink to={item.link}>
          {item.title}
          {/* i - 表示字体图标，此处展示精灵图 */}
          <i className="icon sprite_01"></i>
        </NavLink>
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
      <div className="divider" />
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
