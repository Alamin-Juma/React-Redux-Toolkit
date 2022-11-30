import { createSlice } from "@reduxjs/toolkit";

// initially an empty array of products
const initialState = []
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      onAddItemsToCart: (state,action) => {
        const {id} = action.payload
        const checkProductInCart = state.find((item) => item.id === id)
        if(checkProductInCart) {
          return state.map((cartProduct) => cartProduct.id === id ? {...cartProduct, quantity: cartProduct.quantity + 1} : cartProduct)
        } else {
          state.push({...action.payload, quantity: 1})
        }
      },
      onIncrementProduct: (state,action) => {
        const {id} = action.payload
        return state.map((cartProduct) => cartProduct.id === id?  {...action.payload, quantity: cartProduct.quantity + 1} : cartProduct)
      },
      onDecrementProduct: (state,action) => {
        const {id} = action.payload
        return state.map((cartProduct) => cartProduct.id === id?  {...action.payload, quantity: cartProduct.quantity - 1} : cartProduct)
      },
      onRemoveCartItem: (state,action) => {
        // find the cart item to remove
         const existingCartItem = cartItems.find(
           (cartItem) => cartItem.id === cartItemToRemove.id);
         
          // filter the products to only the catItems except the existingCartItem
          return state.filter((cartProducts) => cartProducts.id !== existingCartItem.id); 
      },
      onClearCart: (state) => {
        return []
      }
    },
  });
  
  export const { login, logout } = userSlice.actions;
  
  // selectors
  export const selectUser = (state) => state.user.user;
  //   const posts = useSelector((state) => state.posts);
  
  export default userSlice.reducer;

  