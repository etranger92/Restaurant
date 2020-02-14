import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const store = createStore(allReducers);

ReactDOM.render(
  <>
    {" "}
    <App />{" "}
  </>,
  document.getElementById("root")
);
