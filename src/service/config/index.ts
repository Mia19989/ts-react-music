// baseUrl timeOut 等配置
// const BASE_URL = 'http://codercba.com:9002'
const TIME_OUT = 10000
const BASE_URL = process.env.REACT_APP_BASE_URL

// 区分开发环境 生产环境
// 方法一
// const TIME_OUT = 10000
// let BASE_URL: string
// if (process.env.NODE_ENV === 'development') {
//   // 开发环境
//   BASE_URL = 'http://codercba.com:9002'
// } else {
//   // 生产环境 或者 测试环境
//   BASE_URL = 'http://coderabc.com:9002'
// }

// 方法二
// console.log('环境', process.env.REACT_APP_BASE_URL)

export { BASE_URL, TIME_OUT }
