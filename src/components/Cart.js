import React,{Fragment} from 'react'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'
import '../index.css'
import Header from './Header'
import { Link } from 'react-router-dom'

function Cart() {

    const {cartItems,itemsPrice} = useSelector((state)=>state.cart)

    return (
        <Fragment>
            <Header/>
            <h2 className='cart-header'>Cart</h2>{
                
                cartItems.length > 0 
                ? <div className='cart'>
                    <div>
                        {
                            cartItems.map((product)=>{
                                return <CartProduct key={product._id} product={product}></CartProduct>
                            })
                        }
                    </div>
                    <div>
                        <p>Total Price : <span>${itemsPrice}</span></p>
                        <button>Buy Now</button>
                    </div>
                </div>
                :
                <div className='no-cart'>
                    <h2>Add something to the Cart</h2>
                    <Link to={`/`}>View Products</Link>
                </div>
            }
        </Fragment>
    )
}

export default Cart