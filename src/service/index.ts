import { BASE_URL, TIME_OUT } from './config'
import HCCRequest from './request'

// 创建封装后的请求实例
const hccRequest = new HCCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccess(config) {
      console.log('实例拦截器-请求成功拦截')
      return config
    },
    requestFailure(err) {
      console.log('实例拦截器-请求失败拦截')
    },
    responseSuccess(res) {
      console.log('实例拦截器-响应成功拦截')
      return res
    },
    responseFailure(err) {
      console.log('实例拦截器-响应失败拦截')
    }
  }
})

export default hccRequest
