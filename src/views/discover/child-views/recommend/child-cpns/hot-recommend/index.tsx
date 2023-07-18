import React, { memo } from 'react'
import type { ReactNode } from 'react'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  return (
    <div>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreText="更多"
        moreLink="/discover/songs"
      />
      HotRecommend
    </div>
  )
}

export default memo(HotRecommend)
