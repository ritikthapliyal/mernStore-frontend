import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'
import '../index.css'

function Cart() {

    const {cartItems,itemsPrice} = useSelector((state)=>state.cart)

    return (
        <div className='cart'>
            <div>
                {
                    cartItems.map((product)=>{
                        return <CartProduct key={product._id} product={product}></CartProduct>
                    })
                }
            </div>
            <p>Total Price : ${itemsPrice}</p>
        </div>
    )
}

export default Cart