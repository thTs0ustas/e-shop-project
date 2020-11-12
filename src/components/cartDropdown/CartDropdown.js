import React from "react";

import './cartDropdown.scss'

import {CustomButton} from "../customButton";
import {CartItem} from "../cartItem";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../redux/cart/cartSelectors";

export const CartDropdown = () => {

   const cartItems = useSelector(state=> selectCartItems(state))

   return (
      <div className={'cart-dropdown'}>
         <div className={'cart-items'}>
            {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
         </div>
         <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
   )
}