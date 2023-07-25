import React, { Fragment } from 'react'
import Product from './Product'
import Header from './Header'
import { useGetProductsQuery } from '../store/apis/productsApi'
import Loading from './Loading'

function Products() {
  const { data, isLoading, isError } = useGetProductsQuery()
  
  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return <div>Error occurred while fetching products</div>
  }

  return (
    <Fragment>
      <Header></Header>
      <div className='Products'>
        {data.products.map((product) => (
          <Product data={product} key={product._id} />
        ))}
      </div>
    </Fragment>
  );
}

export default Products;
