import React, { memo } from 'react'
import type { ReactNode } from 'react'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store/hook'
import SongMenuItem from '@/components/song-menu-item'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  // 获取热门推荐数据
  const { hotRecommends } = useAppSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }))

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreText="更多"
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => (
          <SongMenuItem key={item.id} itemData={item} />
        ))}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
