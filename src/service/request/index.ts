import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { HccRequestConfigType } from './type'

// 对 axios 进行二次封装 - 避免出现三方组件库不再维护，导致后期对项目维护困难等情况

class HCCRequest {
  instance: AxiosInstance

  // 构造 request 实例 - 对 axios 实例进一步的封装
  constructor(config: HccRequestConfigType) {
    // CreateAxiosDefaults 相较于 AxiosRequestConfig，对 headers 做了不同的类型约束
    // export interface CreateAxiosDefaults<D = any> extends Omit<AxiosRequestConfig<D>, 'headers'> {
    //   headers?: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>;
    // }

    this.instance = axios.create(config)

    // 全局拦截器
    // 1.执行全局-请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局拦截-请求成功拦截')
        return config
      },
      (err) => {
        console.log('全局拦截-请求失败拦截', err)
      }
    )

    // 2.执行全局-响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局拦截-响应成功拦截', res)
        // axios 对返回回来的数据做了处理，需要的数据都在 data 里
        return res.data
      },
      (err) => {
        console.log('全局拦截-响应失败拦截', err)
      }
    )

    // 实例拦截器
    // 1.请求拦截
    this.instance.interceptors.request.use(
      config?.interceptors?.requestSuccess,
      config?.interceptors?.requestFailure
    )
    // 2.响应拦截
    this.instance.interceptors.response.use(
      config?.interceptors?.responseSuccess,
      config?.interceptors?.responseFailure
    )
  }

  // 封装网络请求方法
  // 针对单次请求的拦截
  // 泛型 - 约束请求返回值的类型
  request<T = any>(config: HccRequestConfigType<T>) {
    // 是否有请求成功拦截 - 执行
    if (config?.interceptors?.requestSuccess) {
      // 有 -> 执行拦截 返回值修改 config
      config = config?.interceptors?.requestSuccess(config)
    }

    // this.instance.request(config)
    return new Promise<T>((resolve, reject) => {
      // 发送 request 请求
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 是否有响应拦截
          if (config?.interceptors?.responseSuccess) {
            res = config?.interceptors?.responseSuccess(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HccRequestConfigType<T>) {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: HccRequestConfigType<T>) {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: HccRequestConfigType<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default HCCRequest
