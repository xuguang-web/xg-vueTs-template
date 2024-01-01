import axios from "axios"
import type { AxiosInstance } from "axios"
import type { XgRequestConfig } from "./type"

class XGRequest {
  instance: AxiosInstance
  constructor(config: XgRequestConfig) {
    this.instance = axios.create(config)
    // 针对特定的request实例进行拦截器设置
    if (config?.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requestSuccessFn,
        config.interceptors.requestFailFn
      )
      this.instance.interceptors.response.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responeFailFn
      )
    }
  }

  // 针对单独某一个请求增加拦截器
  request<T = any>(config: XgRequestConfig) {
    if (config?.interceptors?.requestSuccessFn) {
      //  不通过实例来进行调用,手动执行拦截器钩子函数
      //this.instance.interceptors.request.use(config.interceptors.requestSuccessFn)
      config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
          // 强制类型转换，先转成any再转成T
          // resolve(res as any as T)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: XgRequestConfig<T>) {
    return this.request({ ...config, method: "get" })
  }

  post<T = any>(config: XgRequestConfig<T>) {
    return this.request({ ...config, method: "post" })
  }

  delete<T = any>(config: XgRequestConfig<T>) {
    return this.request({ ...config, method: "delete" })
  }

  patch<T = any>(config: XgRequestConfig<T>) {
    return this.request({ ...config, method: "pacth" })
  }
}

export default XGRequest
