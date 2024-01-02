import xgDefineRequest from "../index"

import type { LoginInfo, Account } from "./type"

enum LoginApi {
  Login = "/login",
  Register = "/users"
}

// 登录接口
export async function login(account: Account) {
  const res = await xgDefineRequest.post<LoginInfo>({
    url: LoginApi.Login,
    data: account
  })
  return res.data
}

// 注册接口
export async function register(account: Account) {
  const res = await xgDefineRequest.post<LoginInfo>({
    url: LoginApi.Register,
    data: account
  })
  return res.data
}
