import React from 'react'
import ReactDOM from 'react-dom/client'
//正确的样式引入顺序
//样式初始化一般放在最前面 -> //UI框架的样式
import 'antd/dist/antd.css'
//全局样式
import "./assets/styles/global.scss"

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
)
