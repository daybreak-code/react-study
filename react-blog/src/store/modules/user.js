import { createSlice } from '@reduxjs/toolkit'
import { http } from '@/utils'
import { getToken, setToken, clearToken } from '@/utils'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  reducers: {
    setUserToken (state, action) {
      state.token = action.payload
      setToken(state.token)
    },
    setUserInfo (state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo (state) {
      state.token = ''
      state.userInfo = {}
      clearToken()
    }
  }
})

const { setUserToken, setUserInfo ,clearUserInfo} = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = {  //await http.post('/authorizations', loginForm)
      'data': {
        'token': 'jkjjdliddnjnkjk' 
      }
    } 
    dispatch(setUserToken(res.data.token))
  }
}

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = { //await http.get('/user/profile')
      'data' : {
        'name': 'Bob'
      }
    }
    dispatch(setUserInfo(res.data))
  }
}

export { fetchLogin, fetchUserInfo , clearUserInfo}

export default userReducer