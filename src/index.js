import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";

import { persisting, store } from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persisting}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
