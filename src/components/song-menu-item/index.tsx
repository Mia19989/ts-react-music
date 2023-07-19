import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { MenuItemWrapper } from './style'
import { HotRecommendsState } from '@/views/discover/child-views/recommend/store'
import { formatCount, getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData?: HotRecommendsState
}

const SongMenuItem: React.FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <MenuItemWrapper>
      <div className="top">
        <img
          src={getImageSize(String(itemData?.picUrl), 140)}
          alt={itemData?.name}
        />
        <div className="sprite_cover cover">
          <div className="sprite_cover info">
            <span>
              <i className="sprite_icon headset"></i>
              <span>{formatCount(Number(itemData?.playCount))}</span>
            </span>
            <i className="sprite_icon play" />
          </div>
        </div>
      </div>
      <div className="bottom">{itemData?.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
