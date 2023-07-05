import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 实例拦截器 类型约束
// 泛型 - 约束 responseSuccess 返回值类型
export interface HccInterceptorsType<T = AxiosResponse> {
  requestSuccess?: (config: any) => any
  requestFailure?: (err: any) => void
  responseSuccess?: (res: T) => T
  responseFailure?: (err: any) => void
}

// 自定义实例 config 类型 - 添加拦截器
export interface HccRequestConfigType<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: HccInterceptorsType<T>
}
