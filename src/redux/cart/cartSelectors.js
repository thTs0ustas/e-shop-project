import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
	 [selectCart],
	 cart => cart.cartItems
)
export const selectCartHidden = createSelector(
	 [selectCart],
	 cart => cart.hidden
)

export const selectCartItemsCounts=createSelector(
	 [selectCartItems],
	 cartItems =>
			cartItems.reduce((accu, cartItem) =>
				accu + cartItem.quantity,
			0
	 )
)

export const selectCartTotal=createSelector(
	 [selectCartItems],
	 cartItems =>
			cartItems.reduce((accu, cartItem) =>
				 accu + cartItem.quantity *cartItem.price,
				 0
			)
)