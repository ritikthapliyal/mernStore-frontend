import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        setCredentials(state,{payload}){
            console.log(payload)
            localStorage.setItem('userInfo',JSON.stringify(payload))
            return {
                userInfo: payload
            }
        },
        logoutUser(state){
            localStorage.removeItem('userInfo')
            return {
                userInfo : null
            }
        }
    }
})

export const {setCredentials,logoutUser} = authSlice.actions

export default authSlice.reducer