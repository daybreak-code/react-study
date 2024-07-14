import handleNum from "./NumStatus"

const defaultState = {
    //num:handleNum.state.num //这种数据一多要写很多次
    ...handleNum.state  // 解构的写法
}
let reducer = (state = defaultState, action: {type: string, val: number}) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case 'add1':
            handleNum.actions.add1(newState, action)
            break;
        case 'add2':
            handleNum.actions.add2(newState, action)
            break;
        default:
            break;
    }

    return newState
}

export default reducer