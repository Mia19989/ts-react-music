import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  albumData?: any
}

const AlbumItem: React.FC<IProps> = (props) => {
  const { albumData } = props
  return (
    <AlbumItemWrapper>
      <div className="top">
        <img src={getImageSize(albumData.picUrl, 100)} alt="" />
        <a href="" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{albumData.name}</div>
        <div className="artist">{albumData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
