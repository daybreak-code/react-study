import { createSlice } from "@reduxjs/toolkit"

const counterStore = createSlice(
    {
        name: 'counter',
        initialState: {
            count: 0
        },
        reducers: {
            increment(state){
                state.count++
            },
            decrement(state){
                state.count--
            }
        }
    }
)

//解构出来 actionCreater 函数
const {increment, decrement} = counterStore.actions

const reducer = counterStore.reducer

//按需导出
export {increment, decrement}

//默认导出
export default reducer