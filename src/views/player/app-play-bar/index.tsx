import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Slider } from 'antd'
import {
  PlayerBarWrapper,
  PlayerControl,
  PlayerInfo,
  PlayerOperator
} from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AppPlayBar: React.FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="wrap-v2 content">
        <PlayerControl>
          <button className="btn sprite_playbar prev" />
          <button className="btn sprite_playbar play" />
          <button className="btn sprite_playbar next" />
        </PlayerControl>
        <PlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src="http://p1.music.126.net/yxVm_vRFOode6yP67NmMcA==/109951166625738075.jpg?param=50y50"
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">与你</span>
              <span className="singer-name">队长</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">02:30</span>
                <span className="divider">/</span>
                <span className="duration">04:35</span>
              </div>
            </div>
          </div>
        </PlayerInfo>
        <PlayerOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </PlayerOperator>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayBar)
