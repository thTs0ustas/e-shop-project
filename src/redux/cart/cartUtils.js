// function fn(array, what) {
// 	 let counter = 0
// 	 array.forEach(element => {
// 			if (element.id === what.id)  counter++
// 	 });
// 	 return counter
// }
//
// export const fixReduxArray = (array) => {
// 	 return [...new Set(array.map(el =>
// 			JSON.stringify({ [fn(array, el)]:el.name }))
// 	 )].map(s => JSON.parse(s))
// }

export const addItemToCart = (cartItems, cartItemToAdd) => {
	 const existingCartItem = cartItems.find(
			cartItem => cartItem.id === cartItemToAdd.id
	 )

	 if (existingCartItem) {
			return cartItems.map(cartItem =>
				 cartItem.id === cartItemToAdd.id
						? {...cartItem, quantity: cartItem.quantity + 1}
						: cartItem
			)
	 }
	 return [...cartItems, {...cartItemToAdd, quantity: 1}]
}