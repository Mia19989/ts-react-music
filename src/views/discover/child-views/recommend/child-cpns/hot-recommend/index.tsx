import React, { memo } from 'react'
import type { ReactNode } from 'react'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store/hook'

interface IProps {
  children?: ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  // 获取热门推荐数据
  const { hotRecommends } = useAppSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }))

  return (
    <div>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreText="更多"
        moreLink="/discover/songs"
      />
      {hotRecommends.map((item) => (
        <div key={item?.id}>{item?.name}</div>
      ))}
    </div>
  )
}

export default memo(HotRecommend)
