import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 33px;
  padding: 0 10px 4px 34px;
  border-bottom: 2px solid #c10d0c;
  /* 调整精灵图的位置 */
  background-position: -225px -156px;

  .left {
    display: flex;
    align-items: center;

    .title {
      margin-right: 20px;
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    }

    .keywords {
      display: flex;
      align-items: center;

      .item {
        position: relative;
        top: 2px;

        .text {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }

        .divider {
          margin: 0 15px;
          color: #ccc;
        }

        /* :last-child - 兄弟元素中的最后元素 */
        &:last-child {
          .divider {
            /* 通过 CSS 样式控制最后一个分割线不显示 */
            display: none;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .more {
      &:hover {
        text-decoration: underline;
        color: #333;
      }
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      /* 调整精灵图位置 */
      background-position: 0 -240px;
    }
  }
`
