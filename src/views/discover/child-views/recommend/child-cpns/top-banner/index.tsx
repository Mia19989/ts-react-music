import { useAppSelector } from '@/store/hook'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  // 获取 state 中 banner 数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  return (
    <div>
      {banners.map((item) => (
        <div key={item.imageUrl}>{item.imageUrl}</div>
      ))}
    </div>
  )
}

export default memo(TopBanner)
