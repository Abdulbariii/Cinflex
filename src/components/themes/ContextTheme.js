import { type } from "@testing-library/user-event/dist/type";
import React, { Children, createContext, useReducer } from "react";
export const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
  }
};
export function ContextTheme(props) {
  const [state, distpatch] = useReducer(themeReducer, {
    color: "bg-sky-500",
  });

  const colorChange = (color) => {
    distpatch({ type: "CHANGE_COLOR", payload: color });
  };
  return (
    <themeContext.Provider value={{ ...state, colorChange }}>
      {props.children}
    </themeContext.Provider>
  );
}
