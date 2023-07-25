import React, { Fragment, useState, useEffect } from 'react'
import Header from './Header'
import { useLoginMutation } from '../store/apis/usersApi'
import SmallLoading from './SmallLoading'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { setCredentials } from '../store/authSlice'

function LoginSignup() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {search} = useLocation()
    const searchParams = new URLSearchParams(search)
    const redirect = searchParams.get('redirect') || '/'

    const [login,{ isLoading, error }] = useLoginMutation()
 
    const {userInfo} = useSelector((state)=>state.auth)

    const [loginData,setLoginData] = useState({email:"",password:""})
    const [signupData,setSignupData] = useState({email:"",password:"",name:""})

    const handleLogin = async()=>{
        try{
            const res = await login(loginData).unwrap()
            dispatch(setCredentials({...res}))
            navigate(redirect)
        }
        catch(err){

        }
    }

    useEffect(()=>{
        if(userInfo){
            navigate(redirect)
        }
    },[userInfo,redirect])

    return (
        <Fragment>
            <Header/>
            <div className='loginsignup'>
                <div className='login-side'>
                    <h2>Login</h2>
                    <input 
                        value={loginData.email}
                        onChange={(e)=>{setLoginData({...loginData,email:e.target.value})}}
                        placeholder='Email'></input>
                    <input 
                        value={loginData.password}
                        onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}
                        placeholder='Password'></input>
                    <button onClick={handleLogin}>Login</button>
                    {
                        isLoading && <SmallLoading/>
                    }
                </div>
                <div className='signup-side'>
                    <h2>SignUp</h2>
                    <input placeholder='UserName'></input>
                    <input placeholder='Email'></input>
                    <input placeholder='Password'></input>
                    <button>Signup</button>
                </div>
            </div>
        </Fragment>
  )
}

export default LoginSignup