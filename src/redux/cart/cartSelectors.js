import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
	 [selectCart],
	 cart => cart.cartItems
)

export const selectCartItemsCounts=createSelector(
	 [selectCartItems],
	 cartItems =>
			cartItems.reduce((accu, cartItem) =>
				accu + cartItem.quantity,
			0
	 )
)