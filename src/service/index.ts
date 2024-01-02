import XGRequest from "./request"
import { BASE_URL, TIME_OUT, BASE_URL1 } from "./config"
import { ElMessage } from 'element-plus'


// 项目原来的接口
export const xgRequest = new XGRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
    requestFailFn: (err) => {
      return err
    },
    responseSuccessFn: (config) => {
      return config
    },
    responeFailFn: (err) => {
      return err
    }
  }
})

// 自己写的接口
export const xgDefineRequest = new XGRequest({
  baseURL: BASE_URL1 ,
  timeout: TIME_OUT,
  interceptors: {
    // 请求添加token
    requestSuccessFn: (config) => {
      return config
    },
    requestFailFn: (err) => {
      return err
    },
    // 响应拦截
    responseSuccessFn: (res) => {
      const {code,message} = res.data
      if(code !== 0) {
         ElMessage.error(message)
         return
      }
      return res
    },
    responeFailFn: (err) => {
      return err
    }
  }
})

export default xgDefineRequest
