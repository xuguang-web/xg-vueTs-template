import type { AxiosRequestConfig, AxiosResponse } from "axios"

interface XgInterceptors<T> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailFn?: (err: any) => any
  responseSuccessFn?: (res: any) => any
  responeFailFn?: (err: any) => any
}

// interface继承属性拓展
interface XgRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XgInterceptors<T>
}

export type { XgRequestConfig, XgInterceptors }
