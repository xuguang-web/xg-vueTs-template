import xgDefineRequest from "../index"

import type { User, Info, list } from "./type"

enum userApi {
  user = "/users"
}

// 用户列表接口
export async function userList(data: list) {
  console.log("%c [  ]-12", "font-size:13px; background:pink; color:#bf2c9f;", data)
  const res = await xgDefineRequest.post<Info>({
    url: userApi.user + "/list",
    data
  })
  return res.data
}

// 新增(注册用户接口)接口
export async function register(data: User) {
  const res = await xgDefineRequest.post<Info>({
    url: userApi.user + `/add`,
    data
  })
  return res.data
}

// 用户详情接口
export async function detail(id: number) {
  const res = await xgDefineRequest.get<Info>({
    url: userApi.user + `/${id}`
  })
  return res.data
}
