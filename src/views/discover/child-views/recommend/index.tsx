import hccRequest from '@/service'
import React, { memo, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

interface BannerType {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  video: any
  song: any
  bannerBizType: string
}

const Recommend: React.FC<IProps> = () => {
  const [banners, setBanners] = useState<BannerType[]>([])

  useEffect(() => {
    // 请求轮播图数据
    hccRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        console.log('---res', res)
        setBanners(res.banners)
      })
      .catch((err) => {
        console.log('请求轮播图数据', err)
      })
  }, [])

  return (
    <div>
      {banners.map((val, index) => (
        <div key={index}>{val?.imageUrl}</div>
      ))}
    </div>
  )
}

export default memo(Recommend)
