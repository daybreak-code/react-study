// import { useReducer, useState } from 'react'
// import Comp1 from './components/Comp1'
// import Comp2 from './components/Comp2'
// import { Button } from 'antd';
// import {CaretDownOutlined} from '@ant-design/icons'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';
import routes from "./router"
import { useEffect } from 'react';
import { message } from 'antd';

function App() {

  function ToLogin(){
    const navigateTo = useNavigate()
    useEffect(() => {
      navigateTo("/login");
      message.warning("You don't login before, pls login first then access")
    }, [])
    return <div></div>
  }

  
  function ToPage1(){
    const navigateTo = useNavigate()
    useEffect(() => {
      navigateTo("/page1");
      message.warning("You already logged before")
    }, [])
    return <div></div>
  }

  function BeforeRouterEnter(){
    const outlet = useRoutes(routes)
    const location = useLocation();
    let token = localStorage.getItem("lege-react-managent-token");
    //1. 如果访问的是登录页面，并且有token，跳转到首页
    if (location.pathname === "/login" && token){
      return <ToPage1 />
    }
    //2. 如果访问的不是登录页面，并且没有token，跳转到登录页
    if (location.pathname !== "/login" && !token){
      return <ToLogin />
    }
    return outlet
  }

  // const [count, setCount] = useState(0)
  const outlet = useRoutes(routes)
  return (
    <div className='App'>
      {/* <Button type="primary">Our Button</Button>
      顶级组件
      <Comp1 />
      <Comp2 />

      <CaretDownOutlined style={{fontSize: '40px', color: 'red'}} /> */}
      {/* <Link to="/home">Home</Link> |
      <Link to="/about">About</Link> */}

      {/* 占位符组件，类似于窗口，用来展示组件 */}
      {/* <Outlet></Outlet> */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
