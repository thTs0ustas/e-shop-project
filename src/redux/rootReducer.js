import {userReducer} from "./user";
import {cartReducer} from "./cart";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
})