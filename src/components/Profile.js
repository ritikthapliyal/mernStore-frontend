import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../store/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import Header from './Header'
import { useLogoutMutation } from '../store/apis/usersApi'

function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {userInfo} = useSelector((state)=>state.auth)
    const [logout,{isLoading}] = useLogoutMutation()

    const handleLogout = async()=>{
        console.log("haha")
        try{
            const res = await logout().unwrap()
            dispatch(logoutUser())
            navigate('/login-signup')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <Fragment>
            <Header/>
            <div className='profile'>   
                <h2>User Name : {userInfo.name}</h2>
                <h3>User Email : {userInfo.email}</h3>
                <button onClick={handleLogout}>LogOut</button>
            </div>
        </Fragment>
    )
}

export default Profile