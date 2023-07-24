import React, { memo, useRef } from 'react'
import type { ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import { NewAlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store/hook'
import AlbumItemV1 from '@/components/album-item-v1'

interface IProps {
  children?: ReactNode
}

const NewAlbum: React.FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommend.newAlbums
  }))

  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }

  const handleNextClick = () => {
    bannerRef.current?.next()
  }

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        />
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => (
              <div key={item}>
                <div className="album-list">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => (
                    <AlbumItemV1 key={album?.id} albumData={album} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        />
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
