import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath:"products",
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:5000'
    }),
    endpoints(builder){
        return {
            getProducts : builder.query({
                query: () => {
                    return {
                        url: "/products"
                    }
                }
            }),
            getProductById: builder.query({
                query: (id) => ({
                  url: `/products/${id}`,
                }),
            }),
        }
    }
})

export const {useGetProductsQuery, useGetProductByIdQuery} = productApi