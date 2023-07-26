import styled from 'styled-components'

export const PlayerBarWrapper = styled.div`
  z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  /* 精灵图位置 */
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 47px;
    position: absolute;
    /* 位置相对整体下移 */
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const PlayerControl = styled.div`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
  }

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }

  .next {
    background-position: -80px -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 -165px; // -204px
  }
`

export const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  width: 642px;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      /* 相对自身位移 */
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      /* 滑条样式 */
      .ant-slider {
        /* 相对自身位移 */
        position: relative;
        top: -3px;
        width: 493px;
        margin-right: 10px;

        /* 滑条背景样式 */
        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }

        /* 滑条选中样式 */
        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }

        /* 滑块样式 */
        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;

          &::before,
          &::after {
            display: none;
          }
        }
      }

      .time {
        .current {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const PlayerOperator = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .pip {
    background: url(${require('@/assets/img/pip_icon')});
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: -66px -248px;
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
