const store = {
    state: {
        sarr: [20,30,40]
    },
    actions: {
        sarrpush(newState:{sarr:number[]}, action:{type: string, val: number}){
            newState.sarr.push(action.val);
        }
    },
    actionNames: {}
}

const actionNames = {}

for (let key in store.actions){
    actionNames[key] = key
}

store.actionNames = actionNames

export default store