import React, { createContext, useReducer } from "react";
export const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
      case 'GET_YEAR':
        return{...state,year:action.payload};
        case 'GET_GENER':
          return{...state,gener:action.payload};
          case 'GET_TITLE':
            return{...state,title:action.payload}
      default:
      return state;

  }
};
//
export function ContextTheme(props) {
  const [state, distpatch] = useReducer(themeReducer, {
    color: "bg-sky-500",
   
    mode: "bg-gray-900",

    year:'',

    gener:'',

    title:'',
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
const getYear=(year)=>{
  distpatch({type:'GET_YEAR',payload:year});
}
//
const getGeners=(gener)=>{
distpatch({type:'GET_GENER',payload:gener})
}

//
const getTitle=(title)=>{
  distpatch({type:'GET_TITLE',payload:title})
}






  return (
    <themeContext.Provider value={{ ...state, colorChange, colorMode,getYear,getGeners,getTitle }}>
      {props.children}
    </themeContext.Provider>
  );
}
