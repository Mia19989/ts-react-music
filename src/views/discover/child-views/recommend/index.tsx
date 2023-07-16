import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { fetchBannerDataAction } from './store'
import { useAppDispatch } from '@/store/hook'
import TopBanner from './child-cpns/top-banner'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <div>
      <div>Recommend</div>
      <TopBanner></TopBanner>
    </div>
  )
}

export default memo(Recommend)
