import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  .top {
    position: relative;
    width: 118px;
    height: 110px;
    margin-top: 15px;

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      /* 调整精灵图位置 */
      background-position: 0 -570px;
      /* 文本缩进，只针对第一行 - 可实现块级元素的悬挂效果 */
    }
  }

  .bottom {
    font-size: 12px;
    width: 100px;

    .name {
      color: #000;
      ${(props) => props.theme.mixin.textNowrap}

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .artist {
      color: #666;
      ${(props) => props.theme.mixin.textNowrap}

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`
