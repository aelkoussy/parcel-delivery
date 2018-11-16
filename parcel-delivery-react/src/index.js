import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(reducer, composeWithDevTools());
const store = createStore(
  reducer,
  composeWithDevTools()
  // applyMiddleware(...middleware)
  // other store enhancers if any
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
serviceWorker.unregister();
