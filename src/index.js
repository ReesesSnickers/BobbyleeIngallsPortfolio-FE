import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Root from "./Root";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
