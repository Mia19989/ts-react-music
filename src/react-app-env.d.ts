/// <reference types="react-scripts" />

// 扩展 process.env 类型约束
// interface 是在原来重名类型的基础上 进行扩展增加
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}
