const defaultState = {
    num: 20
}
let reducer = (state = defaultState, action: {type: string}) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case 'add1':
            newState.num++
            break;
        case 'add2':
            newState.num += 2
            break;
        default:
            break;
    }

    return newState
}

export default reducer