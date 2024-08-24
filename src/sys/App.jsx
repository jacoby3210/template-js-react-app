import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./router.jsx";
import { store } from "./store.js";

// ========================================================================= //
// The main React component defining the structure of the application.
// ========================================================================= //

export const App = (props) => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// ========================================================================= //
