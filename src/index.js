import { React, StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <HashRouter basename="/">
        <StrictMode>
          <App />
        </StrictMode>
      </HashRouter>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
