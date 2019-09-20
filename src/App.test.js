import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Root from "./Root";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Root>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Root>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
