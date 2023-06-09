import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AppHeader: React.FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <Link to={'/discover'}>发现</Link>
        <Link to={'/mine'}>我的</Link>
        <Link to={'/focus'}>我的关注</Link>
        <Link to={'/download'}>下载客户端</Link>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
