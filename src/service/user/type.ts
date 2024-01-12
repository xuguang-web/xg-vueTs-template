export interface User {
  name: string
  password: string
  cellPhone?: number
  effectBeginTime: string
  effectEndTime: string
  avatarUlr?: string
  departmentId?: number
  roleId?: number
}

export interface Info {
  code: number
  message: string
  data: any
}

export interface idInfo {
  id: number
}

export interface list {
  pageNum: number
  pageSize: number
}
