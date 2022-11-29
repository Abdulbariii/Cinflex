import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextTheme } from "./components/themes/ContextTheme";
import { motion as m,AnimatePresence } from "framer-motion"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextTheme >
<AnimatePresence >
<App />
</AnimatePresence>
       
        
      </ContextTheme>
    </BrowserRouter>
  </React.StrictMode>
);
