import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./sys/router.jsx";
import { store } from "./sys/store.js";

// ========================================================================= //
// Application main component
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
// Initialize React Web Application
// ========================================================================= //

console.debug("Start Application");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// ========================================================================= //
