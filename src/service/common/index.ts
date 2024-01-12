import xgDefineRequest from "../index"

import type { Info } from "./type"

enum Api {
  department = "/department"
}

// 用户列表接口
export async function getdepartmentTree() {
  const res = await xgDefineRequest.get<Info>({
    url: Api.department + "/treeData"
  })

  console.log("%c [  ]-15", "font-size:13px; background:pink; color:#bf2c9f;", res)
  return res.data
}
