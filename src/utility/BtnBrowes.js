import React from "react";

import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";
import { BsArrowRight } from "react-icons/bs";
export default function BtnBrowes() {
  return (
    <div>
      <Link
        to="/movies"
        className={` p-3  text-rose-50 hover:text-black h-fit hover:bg-opacity-80 active:scale-100  flex justify-center items-center transition-all       hover:bg-white  hover:border-2   duration-150  font-cool text-2xl  hover:scale-105`}
      >
        Browes Movies
        <div className="ml-10 transition-all   text-3xl ">
          <BsArrowRight></BsArrowRight>
        </div>
      </Link>
    </div>
  );
}
