import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineDelete,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../features/cart/toggleSlice";
import {
  onIncrementProduct,
  onDecrementProduct,
  onRemoveCartItem,
  totalQuantity,
  cartTotalPriceSelector,
  onClearCart,
} from "../../../features/cart/cartSlice";

import "./Cart-dropdown.css";

export const CartDropdown = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

  const getTotalQuantity = () => {
    let total = 0;
    cart.map((item) => {
      total += item.quantity;
    });
    return total;
  };

  const goToCheckOut = () => {};

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => dispatch(toggle())}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({getTotalQuantity()} items)</span>
        </button>
        {cart.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link
              href="/shop
            "
            >
              <button
                type="button"
                onClick={() => dispatch(toggle())}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cart.length >= 1 &&
            cart.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.imageUrl} className="cart-product-image" />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div className="cart-feature__wwrapper">
                      <p className="quantity-desc">
                        <span className="minus">
                          <AiOutlineMinus
                            onClick={() =>
                              dispatch(onDecrementProduct(item.id))
                            }
                          />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span className="plus">
                          <AiOutlinePlus
                            onClick={() =>
                              dispatch(onIncrementProduct(item.id))
                            }
                          />
                        </span>
                      </p>
                      <span className="delete">
                      <AiOutlineDelete
                        onClick={() => dispatch(onRemoveCartItem(item.id))}
                      />
                      </span>
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {cart.length >= 1 && (
            <h3 className="clear-cart" onClick={() => dispatch(onClearCart())}>
              Clear Cart
            </h3>
          )}
        </div>

        {cart.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>{totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick="">
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
