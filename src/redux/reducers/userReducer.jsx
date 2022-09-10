import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { ACCESS_TOKEN, getStore, getStoreJson, http, setCookie, setStore, setStoreJson, USER_LOGIN } from '../../util/tools';
import { history } from '../../index'
const initialState = {
    userLogin: getStoreJson(USER_LOGIN)    //co the null hoac object
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getProfileAction:(state,action)=>{
        state.userLogin = action.payload
    }
  }
});

export const {getProfileAction} = userReducer.actions

export default userReducer.reducer

export const loginApi = (userLogin) => { //{email,password}
    return async (dispatch) =>{
        try {
            // const result = await axios({
            //     url:"https://shop.cyberlearn.vn/api/Users/signin",
            //     method:"POST",
            //     data:userLogin,
            // })
            const result = await http.post('/Users/signin',userLogin)
            // dang nhap thanh cong => luu du lieu vao localStorage
            console.log(result)
            setCookie(ACCESS_TOKEN,result.data.content.accessToken,30)

            setStore(ACCESS_TOKEN,result.data.content.accessToken)
            //chuyen huong ve profile, trang quen mat khau
            history.push('/profile')
            // dang nhap thanh cong: dispatch action getProfile
            dispatch(getProfileApi())
        } catch (error) {
            history.push('/home')
            console.log(error)
        }
    } 
    
}
export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN)) =>{
    return async (dispatch)=>{
        try {
            // const result = await axios({
            //     url:'https://shop.cyberlearn.vn/api/Users/getProfile',
            //     method:"POST",
            //     headers:{ //header: cac phan du lieu mac dinh gui di
            //         Authorization :'Bearer ' + accessToken
            //     }
            // })
            const result = await http.post('/Users/getProfile')
            //lay profile => dua len redux
            const action = getProfileAction(result.data.content)
            dispatch(action)
            //luu vao store
            setStoreJson(USER_LOGIN,result.data.content)
        } catch (error) {
            console.log(error);
        }
    }
}