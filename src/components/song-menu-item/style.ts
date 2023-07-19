import { styled } from 'styled-components'

export const MenuItemWrapper = styled.div`
  width: 140px;
  margin: 15px 0;

  .top {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* 调整精灵图位置 */
      background-position: 0 0;

      /* 封面=上的文字 和 图标 */
      .info {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 27px;
        padding: 0 10px;
        /* 调整文字暗底的位置 */
        background-position: 0 -537px;
        color: #ccc;

        .headset {
          display: inline-block;
          width: 14px;
          height: 11px;
          margin-right: 5px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }

  .bottom {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
  }
`
