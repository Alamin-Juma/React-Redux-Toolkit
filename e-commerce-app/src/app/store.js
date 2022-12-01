import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners} from '@reduxjs/toolkit/query/react'

import userReducer from '../features/users/userSlice'

import {productsServiceApi}  from '../features/products/productsService'

import {cartReducer} from '../features/cart/cartSlice'

// const custmizedMiddleware = getDefaultMiddleware ({
//     serializableCheck: false,
// })

export const store =  configureStore({
  reducer: {
    user: userReducer,
    [productsServiceApi.reducerPath] : productsServiceApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsServiceApi.middleware)
})

setupListeners(store.dispatch)