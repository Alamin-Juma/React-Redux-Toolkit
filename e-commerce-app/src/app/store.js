import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners} from '@reduxjs/toolkit/query/react'

import userReducer from '../features/users/userSlice'

import {productsServiceApi}  from '../features/products/productsService'

import {cartReducer} from '../features/cart/cartSlice'

import {toggleReducer} from '../features/cart/toggleSlice'

// const custmizedMiddleware = getDefaultMiddleware ({
//     serializableCheck: false,
// })

export const store =  configureStore({
  reducer: {
    user: userReducer,
    [productsServiceApi.reducerPath] : productsServiceApi.reducer,
    cart: cartReducer,
    toggleCart: toggleReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }
  ).concat(productsServiceApi.middleware)
})

setupListeners(store.dispatch)