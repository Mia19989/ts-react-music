import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction
} from './store'
import { useAppDispatch } from '@/store/hook'
import TopBanner from './child-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './child-cpns/hot-recommend'
import NewAlbum from './child-cpns/new-album'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
