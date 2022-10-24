import React from "react";
import Search from "../components/SearchBar.js/Search";
import Cards from "../components/cards/Cards";
import { useLocation } from "react-router-dom";
import Dashboard from "../components/Navigation/Dashboard";
export default function Movies() {
  return (
    <div className="flex justify-start items-start flex-col gap-5 py-5">
      <div>
        <Dashboard></Dashboard>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center">
        <Cards />
      </div>
    </div>
  );
}
