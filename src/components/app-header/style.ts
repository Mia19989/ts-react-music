import styled from 'styled-components'

// contnent 样式 - 导航栏居中
export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  .content {
    /* flex 布局，默认主轴方向是水平 */
    display: flex;
    /* 主轴方向，元素均匀排列，首尾元素排列在容器两端 */
    justify-content: space-between;
  }
`

// 头部导航栏样式 区分左右
export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .title-list {
    display: flex;
    line-height: 70px;

    .item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      /* 后代选择器 - 此处指所有的后代 a 元素 */
      /* :last-of-type - 伪元素，指最后一个 item */
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      /* & 符号通常用于嵌套选择器 */
      /* &:hover - 当前元素在鼠标悬停时的状态 */
      /* &:active - 当前元素被点击时的状态 */
      &:hover a,
      .active {
        color: #fff;
        background: #000;
        /* 文本修饰线 */
        text-decoration: none;
      }

      /* 点击时，item 下面的红色小图标 */
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
`
