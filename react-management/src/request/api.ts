import request from "./index.ts"

//验证码请求
export const captchaAPI = () => {
    return request.get("/prod-api/captchaImage")
}