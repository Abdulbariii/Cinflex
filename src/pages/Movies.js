import React from "react";
import Search from "../components/SearchBar.js/Search";
import Cards from "../components/cards/Cards";
import { useLocation } from "react-router-dom";
export default function Movies() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Search />
      <Cards />
    </div>
  );
}
