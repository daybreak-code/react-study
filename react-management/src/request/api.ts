import request from "./index.ts"

//验证码请求
export const CaptchaAPI = ():Promise<CaptchaAPIRes> => {
    return request.get("/prod-api/captchaImage")
}

export const LoginAPI = (params:LoginAPIReq):Promise<LoginAPIRes> =>request.post("/prod-api/login",params);