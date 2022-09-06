import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";

export default function Navbar() {
  return (
    <div className={""}>
      <nav className="flex justify-around gap-5 m-3 md:m-0 text-lg flex-wrap transition-all duration-200 ">
        <Link className=" hover:scale-105 transition-all  " to="/">
          Home
        </Link>
        <Link className="  hover:scale-105 transition-all   " to="/movies">
          Movies
        </Link>
        <Link
          className="  hover:scale-105 transition-all duration-100   "
          to="/about"
        >
          About
        </Link>
        <Link
          className="  hover:scale-105 transition-all duration-100   "
          to="/SignUp"
        >
          Sign Up
        </Link>
      </nav>
    </div>
  );
}
