import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer from "./store/reducer";
import axios from "axios";

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

// this shall point to the baseURL of the node.js server
axios.defaults.baseURL = "http://localhost:5000";

// using interceptor instead of header default to always use the latest jwt available
axios.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
