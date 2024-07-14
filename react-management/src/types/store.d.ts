//类型声明文件里面不要直接使用引入import...from..., 而是使用 import("@/store")这种语法
type RootState = ReturnType<typeof import("@/store").getState>

interface Window{
    __REDUX_DEVTOOLS_EXTENSION__: function
}