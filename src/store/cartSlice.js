import { createSlice } from "@reduxjs/toolkit"

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems : []}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        
        addToCart(state,action){
            
            const {product,quantityToAdd} = action.payload
            
            const existingItem = state.cartItems.find((x) => x._id === product._id)
            
            console.log(existingItem)

            if(existingItem){
               
                state.cartItems = state.cartItems.map((x) => {
                    if(x._id === product._id){
                        return {...x,quantity:x.quantity+quantityToAdd}
                    }
                    else{
                        return x
                    }
                })
            }
            else{
                state.cartItems = [...state.cartItems,{_id:product._id,title:product.title,price:product.price,quantity:quantityToAdd}]
            }

            state.itemsPrice = state.cartItems.reduce((acc,item)=> acc + item.price * item.quantity, 0)

            localStorage.setItem('cart', JSON.stringify(state))
                
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer