import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartReducer";

import "./cartIcon.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCounts } from "../../redux/cart";

export const CartIcon = () => {
  const dispatchHidden = useDispatch();
  const itemCounts = useSelector((state) => selectCartItemsCounts(state));

  return (
    <div
      className={"cart-icon"}
      onClick={() => dispatchHidden(toggleCartHidden())}
    >
      <ShoppingIcon className={"shopping-icon"} />
      <span className={"item-count"}>{itemCounts}</span>
    </div>
  );
};
