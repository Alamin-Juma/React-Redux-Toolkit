import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {  onAddItemsToCart, onIncrementProduct,  onDecrementProduct, onRemoveCartItem, onClearCart, cartTotalPriceSelector } from "../../../features/cart/cartSlice";


import { Button } from '../../../components/button/Button'
import { CartItem } from '../cart-item/Cart-Item'

import './Cart-dropdown.css'

export const CartDropdown = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

  const goToCheckOut = () => {

  }

  return (
    <div>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cart.map((cartItem) => {
            <CartItem key={cartItem.id} cartItem={cart} />
          })}
        </div>
        <Button onClick={goToCheckOut}>CHECKOUT</Button>
      </div>
    </div>
  );
};

