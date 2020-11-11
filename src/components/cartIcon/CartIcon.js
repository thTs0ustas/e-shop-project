import React from "react";
import {useDispatch} from "react-redux";
import {toggleCartHidden} from "../../redux/cart";

import './cartIcon.scss'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

export const CartIcon = () => {

	 const dispatchHidden = useDispatch()

	 return (
			<div
				 className={'cart-icon'}
				 onClick={() => dispatchHidden(toggleCartHidden())}
			>
				 <ShoppingIcon className={'shopping-icon'}/>
				 <span className={'item-count'}>0</span>
			</div>)
}