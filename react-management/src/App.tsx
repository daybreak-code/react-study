// import { useReducer, useState } from 'react'
// import Comp1 from './components/Comp1'
// import Comp2 from './components/Comp2'
// import { Button } from 'antd';
// import {CaretDownOutlined} from '@ant-design/icons'
import { useRoutes, Link } from 'react-router-dom';
import routes from "./router"

function App() {

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
      {outlet}
    </div>
  )
}

export default App
