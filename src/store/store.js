import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './apis/productsApi'
import authSliceReducer from './authSlice'
import cartSliceReducer from './cartSlice'
import { userApi } from './apis/usersApi'


const store = configureStore({
  reducer: {
    products: productApi.reducer,
    cart: cartSliceReducer,
    auth : authSliceReducer,
    user : userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store
