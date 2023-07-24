import React, { Fragment } from 'react'
import Header from './Header'

function LoginSignup() {
  return (
    <Fragment>
        <Header/>
        <div className='loginsignup'>
            <div className='login-side'>
                <h2>Login</h2>
                <input placeholder='Email'></input>
                <input placeholder='Password'></input>
                <button>Login</button>
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