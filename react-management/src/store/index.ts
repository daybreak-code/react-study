import {legacy_createStore, combineReducers} from "redux"
import NumStatusReducer from "./NumStatus/reducer"
import ArrStatusReducer from "./ArrStatus/reducer"

//创建数据仓库
const store = legacy_createStore(combineReducers({
    NumStatusReducer,
    ArrStatusReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store