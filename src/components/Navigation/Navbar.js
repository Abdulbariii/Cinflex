import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";

export default function Navbar() {
  const { color } = useTheme();
  return (
    <div className={color === "bg-yellow-500" ? "text-black" : "text-white"}>
      <nav className="flex justify-around p-3 flex-wrap">
        <Link className="m-3 text-2xl font-light " to="/">
          Home
        </Link>
        <Link className="m-3 text-2xl font-light " to="/movies">
          Movies
        </Link>
        <Link className="m-3 text-2xl font-light " to="/about">
          About
        </Link>
      </nav>
    </div>
  );
}
