import React from "react";
import Search from "../SearchBar.js/Search";
export default function Dashboard() {
  return (
    <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25  bg-gradient-to-r from-[#f43f5d39] w-fit py-5 rounded-3xl h-fit px-3 flex mt-2">
      <Search></Search>
    </div>
  );
}
