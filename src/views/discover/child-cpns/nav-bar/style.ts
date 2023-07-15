import styled from 'styled-components'

export const DiscoverNav = styled.div`
  height: 30px;
  /* 使用主题颜色，方便颜色随主题颜色改变 */
  background-color: ${(props) => props.theme.colors.primary};

  .nav {
    display: flex;
    padding-left: 180px;
    position: relative;
    top: -4px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;
        font-size: 12px;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
