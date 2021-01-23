import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routers from "./routers";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./ConfigStore";

ReactDOM.render(
  <Routers store={store} />,

  document.getElementById("root")
);

reportWebVitals();
