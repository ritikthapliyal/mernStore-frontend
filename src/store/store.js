import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './apis/productsApi'
import authSliceReducer from './authSlice'
import cartSliceReducer from './cartSlice';


const store = configureStore({
  reducer: {
    products: productApi.reducer,
    cart: cartSliceReducer,
    auth : authSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store
