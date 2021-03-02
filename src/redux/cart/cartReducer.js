// import {
//   ADD_ITEM,
//   CLEAR_ITEM_FROM_CART,
//   REMOVE_ITEM,
//   TOGGLE_CART_HIDDEN,
// } from "./cartActionTypes";
import { addItemToCart, removeItemFromCart } from "./cartUtils";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartSliceReducer = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    toggleCartHidden: (state, action) => ({ ...state, hidden: !state.hidden }),
    addItem: (state, action) => ({
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload),
    }),
    removeItem: (state, action) => ({
      ...state,
      cartItems: removeItemFromCart(state.cartItems, action.payload),
    }),
    clearItemFromCart: (state, action) => ({
      ...state,
      cartItems: state.cartItems.filter(
        (cartItem) => cartItem.name !== action.payload
      ),
    }),
  },
});

export const {
  toggleCartHidden,
  addItem,
  clearItemFromCart,
  removeItem,
} = cartSliceReducer.actions;

//
// export const cartReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case TOGGLE_CART_HIDDEN:
//       return {
//         ...state,
//         hidden: !state.hidden,
//       };
//     case ADD_ITEM:
//       return {
//         ...state,
//         cartItems: addItemToCart(state.cartItems, action.payload),
//       };
//     case REMOVE_ITEM:
//       return {
//         ...state,
//         cartItems: removeItemFromCart(state.cartItems, action.payload),
//       }
//     case CLEAR_ITEM_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (cartItem) => cartItem.name !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };
