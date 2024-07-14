const store = {
    state: {
        num: 20
    },
    actions: {
        add1(newState:{num:number}){
            setTimeout(() => {
                newState.num++
            }, 1000)
        },
        add2(newState:{num:number}, action:{type: string, val: number}){
            newState.num+=action.val
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