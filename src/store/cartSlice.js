import { createSlice } from "@reduxjs/toolkit"

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems : []}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        
        addToCart(state,action){
            
            const {product,quantityToAdd} = action.payload
            
            const existingItem = state.cartItems.find((x) => x._id === product._id)

            let newCartItems
            if(existingItem){
               
                newCartItems = state.cartItems.map((x) => {
                    if(x._id === product._id){
                        return {...x,quantity:x.quantity+quantityToAdd}
                    }
                    else{
                        return x
                    }
                })
            }
            else{
                newCartItems = [...state.cartItems,{_id:product._id,title:product.title,price:product.price,quantity:quantityToAdd}]
            }

            const newItemsPrice = newCartItems.reduce((acc,item)=> acc + item.price * item.quantity, 0)

            localStorage.setItem('cart', JSON.stringify({
                cartItems : newCartItems,
                itemsPrice : newItemsPrice
            }))
            
            return {
                cartItems : newCartItems,
                itemsPrice : newItemsPrice
            }
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer