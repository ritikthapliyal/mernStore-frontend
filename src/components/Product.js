import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom' 

function Product({data}) {
    
    return (
        <Link to={`/product/${data._id}`} className='product-container'>
            <h4>{data.title}</h4>
            <p>Description : {data.description}</p>
            <span>Brand : {data.brand}</span>
            <span>Category : {data.category}</span>

            <div className='product-price'>
                <span>$ {data.price}</span>
            </div>

        </Link>
    )
}

export default Product