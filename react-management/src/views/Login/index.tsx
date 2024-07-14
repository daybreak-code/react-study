import { ChangeEvent, useEffect, useState } from "react"
import styles from "./login.module.css"
import initLoginBtn from './init.ts'
import { Input, Space, Button } from 'antd';
import './login.less'
import {captchaAPI} from "../../request/api.ts"

const View = () => {

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

    const loginBtn = () => {
       console.log("username is: password is: captcha is: ", userName, passwordVal, captchaVal)
    }

    const getCaptchaImage = () => {
        captchaAPI().then((res) => {
            console.log(res)
        })

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
                                <img height="38" src="./verify_code.png" alt="./verify_code.png" />
                            </div>
                        </div>
                        <Button type="primary" className="loginBtn" onClick={loginBtn}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default View;