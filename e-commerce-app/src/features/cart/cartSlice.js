import { createSlice, createSelector } from "@reduxjs/toolkit";

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
      totalQuantity: (state,action) => {
        return state.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)
      },
      onClearCart: (state) => {
        return []
      },
      toggleCart: (state) => {
        state.cart_isOpen = !state.cart_isOpen;
      }    
    },
  });
  
  export const { onAddItemsToCart, onIncrementProduct,  onDecrementProduct, onRemoveCartItem, onClearCart, toggleCart } = cartSlice.actions;
  
  export const cartReducer = cartSlice.reducer


  // selectors., after state in cart now 
  const cartSelector = (state) => state.cart;

 export const cartTotalSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((total, current) => (total += current.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  )
);