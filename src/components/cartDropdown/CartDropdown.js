import React from "react";

import "./cartDropdown.scss";

import { CustomButton } from "../customButton";
import { CartItem } from "../cartItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartReducer";
import { useHistory } from "react-router-dom";
import { selectCartItems } from "../../redux/cart";

export const CartDropdown = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <div className={"cart-dropdown"}>
      <div className={"cart-items"}>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className={"empty-message"}>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
