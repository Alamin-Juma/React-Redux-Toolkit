import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  cartIsOpen: false,
};

const toggleCart = createSlice({
  name: "toggleCart",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsOpen = !state.cartIsOpen;
    },
  },
});

export const toggleReducer = toggleCart.reducer;
export const { toggle } = toggleCart.actions;
