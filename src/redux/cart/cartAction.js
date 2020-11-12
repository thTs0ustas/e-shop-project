import {ADD_ITEM, TOGGLE_CART_HIDDEN} from "./cartActionTypes";

export const toggleCartHidden = () => ({
	 type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
	 type: ADD_ITEM,
	 payload: item
});