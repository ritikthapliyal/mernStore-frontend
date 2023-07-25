import './index.css'
import { Routes,Route } from 'react-router-dom'
import Products from './components/Products'
import IndividualProduct from './components/IndividualProduct'
import Cart from './components/Cart'
import LoginSignup from './components/LoginSignup'
import Profile from './components/Profile'
import { useSelector } from 'react-redux'

function App() {
    
  
    const { userInfo } = useSelector((state) => state.auth);
    const isUserLoggedIn = !!userInfo

    return (
        <Routes>
          <Route path='/' element={<Products/>}></Route>
          <Route path='/product/:id' element={<IndividualProduct/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login-signup' element={<LoginSignup/>}></Route>
          <Route path='/profile' element={isUserLoggedIn ? <Profile/> : <LoginSignup/>}></Route>
        </Routes>    
    )
}

export default App