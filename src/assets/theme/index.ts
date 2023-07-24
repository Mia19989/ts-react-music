const theme = {
  colors: {
    primary: '#c20c0c',
    secondary: '#C10D0C'
  },
  size: {},
  // 混入 - 通过字符串进行混入
  mixin: {
    wrapv1: `
      width: 1100px;
      margin: 0 auto;
    `,
    // 文本不换行 超出一行省略
    textNowrap: `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `
  }
}

export default theme
