//组件形式写法
import { Navigate } from "react-router-dom"
import React,{ lazy } from "react"

const About = lazy(() => import("../views/About"))
const Home = lazy(() => import("../views/Home"))

//懒加载的模式的组件的写法，外面还要套一层loading的提示组件
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>loading...</div>}>
        {comp}
    </React.Suspense> 
    )

const routes = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: withLoadingComponent(<About />) 
    }
]

export default routes