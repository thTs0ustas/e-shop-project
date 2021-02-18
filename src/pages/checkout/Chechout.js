import React from "react";
import { useSelector } from "react-redux";

import "./checkout.scss";

import { selectCartItems } from "../../redux/cart";
import { selectCartTotal } from "../../redux/cart/cartSelectors";
import { CheckoutItem } from "../../components/checkoutItem";

export const CheckoutPage = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartTotal = useSelector((state) => selectCartTotal(state));

  return (
    <div className={"checkout-page"}>
      <div className={"checkout-header"}>
        <div className={"header-block"}>
          <span>Product</span>
        </div>
        <div className={"header-block"}>
          <span>Description</span>
        </div>
        <div className={"header-block"}>
          <span>Quantity</span>
        </div>
        <div className={"header-block"}>
          <span>Price</span>
        </div>
        <div className={"header-block"}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={"total"}>
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
};
