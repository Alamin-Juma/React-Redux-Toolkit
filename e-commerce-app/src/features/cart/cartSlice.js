import { createSlice, createSelector } from "@reduxjs/toolkit";

// initially an empty array of products
const initialState = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    onAddItemsToCart: (state, action) => {
      const { id } = action.payload;
      const checkProductInCart = state.find((item) => item.id === id);
      if (checkProductInCart) {
        return state.map((cartProduct) =>
          cartProduct.id === id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
            : cartProduct
        );
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    onIncrementProduct: (state, { payload }) => {
      return state.map((cartItem) =>
      cartItem.id === payload
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );
    },
    onDecrementProduct: (state, {payload}) => {
      return state.map((item) =>
        item.id === payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
    toggleCartQuantity: (state, action) => {
      const { id, value } = action.payload;
    },
    onRemoveCartItem: (state, {payload}) => {
      // find the cart item to remove
      const existingCartItem = state.find((cartItem) => cartItem.id === payload);

      // filter the products to only the catItems except the existingCartItem
      return state.filter(
        (cartProducts) => cartProducts.id !== existingCartItem.id
      );
    },
    onClearCart: (state) => {
      return (state = []);
    },
  },
});

export const {
  onAddItemsToCart,
  onIncrementProduct,
  onDecrementProduct,
  onRemoveCartItem,
  onClearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// selectors., after state in cart now

const cartSelector = (state) => state.cart;

export const cartTotalItemSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((total, current) => (total += current.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  )
);
