import { useEffect } from "react"
import styles from "./login.module.css"
import initLoginBtn from './init.ts'

const View = () => {

    useEffect(() => {
        initLoginBtn();
        window.onresize = function() {
            initLoginBtn();
        }
    }, [])

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{display:"block"}}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox}>
                <div className={styles.title}>
                    <h1>前端乐哥 &nbsp;&nbsp; 通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
            </div>
        </div>
    )
}

export default View;