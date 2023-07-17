import React, { memo, useRef, useState } from 'react'
import type { ReactNode, ElementRef } from 'react'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { useAppSelector } from '@/store/hook'
import { url } from 'inspector'

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  // 创建 ref 对象，注意类型约束，初始值设置 null
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currIndex, setCurIndex] = useState(0)

  // 获取 state 中 banner 数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  /** 切换上一张轮播图 */
  const handlePrevClick = () => {
    // ref 属性用于访问组件实例，调用组件上的方法或获取组件上的属性
    bannerRef?.current?.prev()
  }

  /** 切换下一章轮播图 */
  const handleNextClick = () => {
    bannerRef?.current?.next()
  }

  /** 切换面板的回调 */
  const handleAfterChange = (current: number) => {
    setCurIndex(current)
  }

  let bagImg = banners[currIndex]?.imageUrl
  if (bagImg) {
    bagImg = `${bagImg}?imageView&blur=40x20`
  }

  return (
    <BannerWrapper
      style={{
        background: `url(${bagImg}) center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            ref={bannerRef}
            effect="fade"
            afterChange={handleAfterChange}
          >
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
          <button className="btn left" onClick={handlePrevClick} />
          <button className="btn right" onClick={handleNextClick} />
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
