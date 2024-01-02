import xgDefineRequest from "../index"

import type {LoginInfo,Account} from "./type"

enum LoginApi {
    Login = "/login",
    Register = "/users"
}

// 登录接口
export function login(account:Account) {
    return xgDefineRequest.post<LoginInfo>({
        url: LoginApi.Login,
        data: account
    })
}

// 注册接口
export function register(account:Account) {
    return xgDefineRequest.post<LoginInfo>({
        url: LoginApi.Register,
        data: account
    })
}



