import handleXxx from "./index.ts"

const defaultState = {
    ...handleXxx.state,
}

let reducer = (state = defaultState, action: {type: string, val: number}) => {
    let newState = JSON.parse(JSON.stringify(state))
    for (let key in handleXxx.actionNames){
        if (action.type === handleXxx.actionNames[key]){
            handleXxx.actions[handleXxx.actionNames[key]](newState, action)
            break;
        }
    }

    return newState
}

export default reducer