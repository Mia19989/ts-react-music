import { useAppSelector } from '@/store/hook'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

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
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay>
            {banners.map((item) => (
              <div key={item.imageUrl} className="banner-item">
                <img
                  className="image"
                  src={item.imageUrl}
                  alt={item.typeTitle}
                />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>

        <BannerControl>
          <button className="btn left" />
          <button className="btn right" />
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
