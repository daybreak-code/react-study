import {legacy_createStore, combineReducers,compose,applyMiddleware } from "redux"
import handleNum from "./NumStatus/reducer"
import handleArr from "./ArrStatus/reducer"
import {thunk} from "redux-thunk"
// import handleXxx from "./XxxStatus/reducer"


// 组合各个模块的reducer
const reducers = combineReducers({
    handleNum,
    handleArr
  })

//创建数据仓库
// const store = legacy_createStore(combineReducers({
//     handleNum,
//     handleArr,
//     // handleXxx
// }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose //rt

// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(thunk))); 


export default store