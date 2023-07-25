import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {

  const navigate = useNavigate()
  const products = useSelector((state) => state.cart.cartItems)
  const {userInfo} = useSelector((state)=>state.auth)

  const handleLoginSignup = () => {
    navigate('/login-signup')
  }

  const handleProfileButton = () => {
    navigate('/profile')
  }

  const handleCartClick = () => {
    navigate('/cart')
  };

  return (
    <div className='header-component'>
        <Link to={`/`}>Logo</Link>
        <div>
            <button onClick={handleCartClick}  className='header-cart-button-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span>{products.length}</span>
            </button>
            {
              userInfo && userInfo._id ? 
              <button className="profile-button" onClick={handleProfileButton}>{userInfo.name}</button>
              :
              <button className='header-cart-button-2' onClick={handleLoginSignup}>Sign In/up</button>
            }
        </div>
    </div>
  )
}

export default Header