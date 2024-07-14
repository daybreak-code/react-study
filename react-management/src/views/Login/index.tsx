import { ChangeEvent, useEffect, useState } from "react"
import styles from "./login.module.css"
import initLoginBtn from './init.ts'
import { Input, Space, Button, message } from 'antd';
import './login.less'
import {CaptchaAPI, LoginAPI} from "../../request/api.ts"
import {useNavigate} from "react-router-dom"

const View = () => {

    let navigateTo = useNavigate();

    useEffect(() => {
        initLoginBtn();
        window.onresize = function() {
            initLoginBtn();
        }
    }, [])

    //保存 username
    const [userName, setUserName] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [captchaVal, setCaptchaVal] = useState('');
    const [captchaImg, setCaptchaImg] = useState('');

    const changeUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
        console.log(userName)
    }

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value)
        console.log(passwordVal)
    }

    const changeCaptcha = (e: ChangeEvent<HTMLInputElement>) => {
        setCaptchaVal(e.target.value)
        console.log(captchaVal)
    }

    const getCaptchaImage = async () => {
        let captchaAPIRes = await CaptchaAPI();
        console.log(captchaAPIRes);
        if (captchaAPIRes.code === 200){
            setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img)
            localStorage.setItem("uuid",captchaAPIRes.uuid)
        }
    }

    const gotoLogin = async () => {
        console.log("username and password and verify code is: ", userName, passwordVal, captchaVal)
        if (!userName.trim() || !passwordVal.trim() || !captchaVal.trim()){
            message.warning("Pls input information completely")
            return
        }
        let loginAPIRes = await LoginAPI({
            username:userName,
            password:passwordVal,
            code:captchaVal,   
            uuid:localStorage.getItem("uuid") as string    
          })

          console.log(loginAPIRes);

          if(loginAPIRes.code===200){
            // 1、提示登录成功
            message.success("登录成功！")
            // 2、保存token
            localStorage.setItem("lege-react-management-token",loginAPIRes.token)
            // 3、跳转到/page1
            navigateTo("/page1")
            // 4、删除本地保存中的uuid
            localStorage.removeItem("uuid")
          }
      
      
    }

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{display:"block"}}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox + " loginbox"}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>前端乐哥 &nbsp;&nbsp; 通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Input placeholder="Basic usage" onChange={changeUserName} />
                        <Input.Password placeholder="input password" onChange={changePassword}/>
                        <div className="captchaBox">
                            <Input placeholder="Verify code" onChange={changeCaptcha} />
                            <div className="captchaImg" onClick={getCaptchaImage}>
                                <img height="38" src={captchaImg} alt="" />
                            </div>
                        </div>
                        <Button type="primary" className="loginBtn" onClick={gotoLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default View;