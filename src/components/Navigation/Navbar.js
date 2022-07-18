import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
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
