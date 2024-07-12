import {legacy_createStore} from "redux"
import reducer from "./reducer.ts"

//创建数据仓库
const store = legacy_createStore(reducer)

export default store