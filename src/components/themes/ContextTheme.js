import React, { createContext, useReducer } from "react";
export const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    case "GET_YEAR":
      return { ...state, year: action.payload };
    case "GET_GENER":
      return { ...state, gener: action.payload };
    case "GET_TITLE":
      return { ...state, title: action.payload };
    case "GET_PAGE":
      return { ...state, page: action.payload };
    case "OPEN_MENU":
      return { ...state, openMenu: action.payload };
      case 'GET_SEASON':
        return{...state,season:action.payload};
      case 'GET_CSEASON':
        return{...state,cseason:action.payload};
    default:
      return state;
  }
};
//
export function ContextTheme(props) {
  const [state, distpatch] = useReducer(themeReducer, {
    color: "bg-green-500",
   

    mode: "bg-gray-900",

    year: "",

    gener: "",

    title: "",

    page: "6",

    openMenu: false,
    season:'0',
    cseason:'1'
  });

  //
  const colorChange = (color) => {
    distpatch({ type: "CHANGE_COLOR", payload: color });
  };
  //
  const colorMode = (mode) => {
    distpatch({ type: "CHANGE_MODE", payload: mode });
  };
  //
  const getYear = (year) => {
    distpatch({ type: "GET_YEAR", payload: year });
  };
  //
  const getGeners = (gener) => {
    distpatch({ type: "GET_GENER", payload: gener });
  };

  //
  const getTitle = (title) => {
    distpatch({ type: "GET_TITLE", payload: title });
  };
  //
  const getPage = (page) => {
    distpatch({ type: "GET_PAGE", payload: page });
  };
  //
  const openNavbar = (menu) => {
    distpatch({ type: "OPEN_MENU", payload: menu });
  };
  //
  const maxSeason=(season)=>{
    distpatch({type:'GET_SEASON',payload:season});
  }
  //
  const currentSeason=(cseason)=>{
    distpatch({type:'GET_CSEASON',payload:cseason});
  }

  return (
    <themeContext.Provider
      value={{
        ...state,
        colorChange,
        openNavbar,
        colorMode,
        getYear,
        getGeners,
        getTitle,
        getPage,
        maxSeason,
        currentSeason
      }}
    >
      {props.children}
    </themeContext.Provider>
  );
}
