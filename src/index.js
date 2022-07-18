import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextTheme } from "./components/themes/ContextTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextTheme>
        <App />
      </ContextTheme>
    </BrowserRouter>
  </React.StrictMode>
);
