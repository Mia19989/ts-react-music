import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 50px;

  > .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 186px;
    padding: 0 5px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;
    .banner {
      width: 640px;
      height: 150px;

      /* album-list 不是 banner 的直接子元素 不能使用 >选择器 */
      .album-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }
  }
`
