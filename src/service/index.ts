import XGRequest from "./request"
import { BASE_URL, TIME_OUT } from "./config"

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

export default xgRequest
