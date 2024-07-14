import handleArr from "./index.ts"

const defaultState = {
    ...handleArr.state
}

let reducer = (state = defaultState, action: {type: string, val: number}) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case handleArr.sarrpush:
            handleArr.actions.sarrpush(newState, action)
            break;
        default:
            break;
    }

    return newState
}

export default reducer