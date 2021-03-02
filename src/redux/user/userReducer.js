//import { UserActionTypes } from "./userActionTypes";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

const options = {
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => ({
      ...state,
      currentUser: action.payload,
    }),
  },
};

export const sliceReducer = createSlice(options);
export const { setCurrentUser } = sliceReducer.actions;
export default sliceReducer.reducer;

// export const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case UserActionTypes.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: action.payload,
//       };
//     default:
//       return state;
//   }
// };
