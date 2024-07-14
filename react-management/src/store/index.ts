import {legacy_createStore, combineReducers} from "redux"
import handleNum from "./NumStatus/reducer"
import handleArr from "./ArrStatus/reducer"

//创建数据仓库
const store = legacy_createStore(combineReducers({
    handleNum,
    handleArr
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store