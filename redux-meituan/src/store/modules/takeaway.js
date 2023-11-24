// 编写store

import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { act } from "react-dom/test-utils"

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        foodsList: [],
        activeIndex: 0
    },
    reducers: {
        setFoodsList(state, action){
            state.foodsList = action.payload
        },
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload
        },
        addCart(state, action) {
            state.cartList.find(item => item.id === action.payload.id)
            if(item){
                item.count++
            } else {
                state.cartList.push(action.payload)
            }
        }
    }
})

const {setFoodsList} = foodsStore.actions
const fetchFoodsList = () => {
    return async () => {
        //编写异步逻辑
       const res = axios.get('http://localhost:3004/takeaway')
       dispatch(setFoodsList(res.data))
    }
}

export {fetchFoodsList, changeActiveIndex, addCart}

const reducer = foodsStore.reducer

export default reducer