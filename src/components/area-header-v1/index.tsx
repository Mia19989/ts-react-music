import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { HeaderWrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderV1: React.FC<IProps> = (props) => {
  const {
    title = '默认标题',
    keywords = [],
    moreText = '更多',
    moreLink = '/'
  } = props

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        {/* h3 有利于搜索引擎 */}
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => (
            <div key={item} className="item">
              <span className="text">{item}</span>
              <span className="divider">|</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="icon sprite_02" />
      </div>
    </HeaderWrapper>
  )
}

export default memo(AreaHeaderV1)
