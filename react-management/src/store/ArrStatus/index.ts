export default {
    state: {
        sarr: [20,30,40]
    },
    actions: {
        sarrpush(newState:{sarr:number[]}, action:{type: string, value: number}){
            newState.sarr.push(action.value);
        }
    },
    sarrpush: "sarrpush"
}