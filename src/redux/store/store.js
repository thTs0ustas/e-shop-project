import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "../rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persisting = persistStore(store);

export default { store, persisting };
