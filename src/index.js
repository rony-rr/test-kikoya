import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import cartReducer from "./ducks/cart";
import productsReducer from "./ducks/products";
import App from "./App";
import productsData from "./data/products";
import "bootstrap/dist/css/bootstrap.css";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

let store = createStore(
  rootReducer,
  {
    products: productsData, // initial store values
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
