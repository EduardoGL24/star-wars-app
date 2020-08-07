import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./fonts/Quicksand-Bold.ttf";
import "./fonts/Quicksand-Light.ttf";
import "./fonts/Quicksand-Medium.ttf";
import "./fonts/Quicksand-Regular.ttf";
import "./fonts/Quicksand-SemiBold.ttf";

// Librerias
import "bootstrap/dist/css/bootstrap.min.css";
import "typed.js/lib/typed.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
