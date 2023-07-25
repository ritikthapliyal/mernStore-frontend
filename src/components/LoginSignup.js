import React, { Fragment, useState } from 'react'
import Header from './Header'
import { useLoginMutation } from '../store/apis/usersApi'
import Loading from './Loading'

function LoginSignup() {

    const [loginData,setLoginData] = useState({email:"",password:""})
    const [signupData,setSignupData] = useState({email:"",password:"",name:""})

    const handleLogin = ()=>{
        console.log(loginData)
    }

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