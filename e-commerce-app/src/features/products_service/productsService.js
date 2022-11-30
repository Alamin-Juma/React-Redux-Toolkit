// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { getDocs, serverTimestamp } from 'firebase/firestore'
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
            async queryFn() {
                try {
                    const productRef = collection(db, 'products');
                    const querySnapshot = await getDocs(productRef);
                    let productItems = [];
                    querySnapshot?.forEach((doc) => {
                        productItems.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                    return {data: productItems}
                } catch (e) {
                    return { error: e }
                }
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
                return { data: 'ok'}
            }
        })
    }),
    
})

export const { useFetchProductsQuery, useAddProductsMutation } = productsServiceApi