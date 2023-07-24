import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { fetchRecommendDataAction } from './store'
import { useAppDispatch } from '@/store/hook'
import TopBanner from './child-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './child-cpns/hot-recommend'
import NewAlbum from './child-cpns/new-album'
import TopRanking from './child-cpns/top-ranking'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // dispatch(fetchBannerDataAction())
    // dispatch(fetchHotRecommendAction())
    // dispatch(fetchNewAlbumAction())
    dispatch(fetchRecommendDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
