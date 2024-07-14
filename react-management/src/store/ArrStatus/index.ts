export default {
    state: {
        sarr: [20,30,40]
    },
    actions: {
        sarrpush(newState:{sarr:number[]}, action:{type: string, val: number}){
            newState.sarr.push(action.val);
        }
    },
    sarrpush: "sarrpush"
}