import React from "react";

import "./checkoutItem.scss";
import { useDispatch } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cartReducer";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatchRemoveItem = useDispatch();
  const removingItem = useDispatch();
  const addingItem = useDispatch();

  return (
    <div className={"checkout-item"}>
      <div className={"image-container"}>
        <img src={imageUrl} alt={"item"} />
      </div>
      <span className={"name"}>{name}</span>
      <span className={"quantity"}>
        <div
          className={"arrow"}
          onClick={() => removingItem(removeItem(cartItem))}
        >
          &#10094;
        </div>
        <span className={"value"}>{quantity}</span>
        <div className={"arrow"} onClick={() => addingItem(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className={"price"}>${price}</span>
      <div
        className={"remove-button"}
        onClick={() => dispatchRemoveItem(clearItemFromCart(name))}
      >
        &#10005;
      </div>
    </div>
  );
};
