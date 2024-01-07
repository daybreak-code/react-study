import { createSlice } from '@reduxjs/toolkit'
import { http } from '@/utils'
import { getToken, setToken } from '@/utils'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || ''
  },
  reducers: {
    setUserInfo (state, action) {
      state.token = action.payload
      setToken(state.token)
    }
  }
})

const { setUserInfo } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await http.post('/authorizations', loginForm)
    dispatch(setUserInfo(res.data.token))
  }
}

export { fetchLogin }

export default userReducer