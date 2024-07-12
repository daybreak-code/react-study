import React from 'react'
import ReactDOM from 'react-dom/client'
//正确的样式引入顺序
//样式初始化一般放在最前面 -> //UI框架的样式
import 'antd/dist/reset.css'
//全局样式
import "./assets/styles/global.scss"

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

//状态管理的库
import {Provider} from "react-redux"
import store from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
)
