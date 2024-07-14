import request from "./index.ts"

//验证码请求
export const CaptchaAPI = () => {
    return request.get("/prod-api/captchaImage")
}