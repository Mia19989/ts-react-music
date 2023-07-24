import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}

const TopRanking: React.FC<IProps> = () => {
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div>RankingWrapper</div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
