import { billListData } from "@/contants";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList (state, action) {
      state.billList = action.payload
    }
  }
})

const {setBillList } = billStore.actions

const getBillList = () => {
  return async (dispatch) => {
    // 编写异步请求
    const res = await axios.get('http://localhost:8888/ka')
    // 触发同步reducer
    dispatch(setBillList(res.data))
  }
}


export { getBillList ,setBillList}

const reducer = billStore.reducer

export default reducer
