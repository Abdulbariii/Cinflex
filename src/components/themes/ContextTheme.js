import { type } from "@testing-library/user-event/dist/type";
import React, { Children, createContext, useReducer } from "react";
export const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
  }
};
export function ContextTheme(props) {
  const [state, distpatch] = useReducer(themeReducer, {
    color: "bg-sky-500",
   
    mode: "bg-gray-900",
  });

  const colorChange = (color) => {
    distpatch({ type: "CHANGE_COLOR", payload: color });
  };

  const colorMode = (mode) => {
    distpatch({ type: "CHANGE_MODE", payload: mode });
  };
  return (
    <themeContext.Provider value={{ ...state, colorChange, colorMode }}>
      {props.children}
    </themeContext.Provider>
  );
}
