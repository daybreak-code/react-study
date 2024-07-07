//组件形式写法
import { Navigate } from "react-router-dom"
import React,{ Children, lazy } from "react"

// const About = lazy(() => import("../views/About"))
const Home = lazy(() => import("../views/Home"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))

//懒加载的模式的组件的写法，外面还要套一层loading的提示组件
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>loading...</div>}>
        {comp}
    </React.Suspense> 
    )

const routes = [
    {
        path: "/",
        element: <Navigate to="/page1"/>
    },
    {
        path: "/",
        element: withLoadingComponent(<Home />),
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />) 
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />) 
            }
        ]
    }
    // {
    //     path: "/about",
    //     element: withLoadingComponent(<About />) 
    // }
]

export default routes