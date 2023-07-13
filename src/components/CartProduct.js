import React, { Fragment } from 'react'
import '../index.js'

function CartProduct({product}) {


    return (
        <Fragment>
            <div className='cart-product'>
                <h2>{product.title}</h2>
                <span><b>Price: </b> ${product.price}</span>
                <p>x <span>{product.quantity}</span></p>
                <div className='cart-product-buttons'>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </Fragment>
    )
}

export default CartProduct