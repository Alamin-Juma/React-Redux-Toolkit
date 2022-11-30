// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { serverTimestamp } from 'firebase/firestore'
import {
    getFirestore,
    addDoc,
    collection,
    doc,
    getDoc,
    setDoc,
  } from "firebase/firestore";

  import {db} from '../../utils/firebase.utils'
export const productsServiceApi = createApi({
    reducerPath: 'productsServiceApi',
    baseQuery: fakeBaseQuery(),
    baseQuery: fakeBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        fetchProducts: builder.query({
            queryFn() {
                return { data: 'ok' }
            }
        }),
        addProducts: builder.mutation({ 
            async queryFn(data) {
                try {
                    await addDoc(collection(db, "products"), {
                        ...data,
                        timestamp: serverTimestamp()
                    })
                } catch (e) {
                    return {error: e}
                }
            }
        })
    }),
    
})

export const { useFetchProductsQuery, useAddProductsMutation } = productsServiceApi