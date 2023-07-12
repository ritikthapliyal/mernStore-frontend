import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../store/apis/productsApi';
import Header from './Header';
import Loading from './Loading';
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

function IndividualProduct() {

  const {id} = useParams()
  const dispatch = useDispatch()
  const [quantityToAdd,setQuantity] = useState(1)
  const { data , isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return <div>Error: {isError.message}</div>
  }

  const {product} = data

  const handleAddToCart = () => {
    dispatch(addToCart({product,quantityToAdd}))
  }



  return (
    <Fragment>
      <Header/>
      <div className='individual-product'>

          <img src={product.thumbnail} alt="Product" />

          <div className='individual-product-div-1'>
            <h2>{product.title}</h2>
            <p><b>Description : </b>{product.description}</p>
            <span><b>Brand : </b>{product.brand}</span>
            <span><b>Category : </b>{product.category}</span>
            <span><b>Price: </b> ${product.price}</span>
          </div>

          <div className='individual-product-div-2'>
            <input 
              type='number' 
              placeholder='Quantity' 
              min={1} 
              max={10}
              defaultValue={quantityToAdd}
              onChange={(e)=>setQuantity(Number(e.target.value))}
              />
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>

      </div>
    </Fragment>
  )
}

export default IndividualProduct