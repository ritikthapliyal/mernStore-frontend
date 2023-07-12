import { Routes,Route } from 'react-router-dom'
import Products from './components/Products'
import IndividualProduct from './components/IndividualProduct'
import Cart from './components/Cart'
import './index.css'

function App() {
    return (
        <Routes>
          <Route path='/' element={<Products/>}></Route>
          <Route path='/product/:id' element={<IndividualProduct/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>      
    )
}

export default App