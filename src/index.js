import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { bankingReducer } from "./reducers/bankingReducers";
import { Provider } from "react-redux";

const store = createStore(bankingReducer);
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
