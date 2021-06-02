import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NewApp from "./NewApp";
import Root from "./Root";
import { BrowserRouter } from "react-router-dom";

import Feature from './utility/featureConfig'

ReactDOM.render(
  <Root>
    <BrowserRouter>
    {Feature.useOldPage ? <App /> : <NewApp />}
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
