import { configureStore } from '@reduxjs/toolkit'
import { setupListeners} from '@reduxjs/toolkit/query/react'

import userReducer from '../features/users/userSlice'

import {productsServiceApi}  from '../features/products_service/productsService'

export const store =  configureStore({
  reducer: {
    user: userReducer,
    [productsServiceApi.reducerPath] : productsServiceApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsServiceApi.middleware)
})

setupListeners(store.dispatch)