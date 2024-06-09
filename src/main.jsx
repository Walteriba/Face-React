import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// No olvidar el npm install bootstrap !!!
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
