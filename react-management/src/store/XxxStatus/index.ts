const store = {
    state: {
    },
    actions: {
    },
    actionNames: {}
}

const actionNames = {}

for (let key in store.actions){
    actionNames[key] = key
}

store.actionNames = actionNames

export default store