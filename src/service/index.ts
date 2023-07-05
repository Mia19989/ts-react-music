import HCCRequest from './request'

// 创建封装后的请求实例
const hccRequest = new HCCRequest({
  baseURL: 'http://xxx',
  interceptors: {
    requestSuccess(config) {
      console.log('请求成功拦截')
      return config
    },
    requestFailure(err) {
      console.log('请求失败拦截')
    },
    responseSuccess(res) {
      console.log('响应成功拦截')
      return res
    },
    responseFailure(err) {
      console.log('响应失败拦截')
    }
  }
})

export default hccRequest
