import React from "react";

import { NavLink } from "react-router-dom";
export default function Navbar() {
  const navbars = [
    {
      navName: "Home",
      navLink: "/",
    },
    {
      navName: "Movies",
      navLink: "/movies",
    },
    {
      navName: "About",
      navLink: "/about",
    },
    {
      navName: "Login",
      navLink: "/signup",
    },
  ];

  return (
    <div className={" self-center "}>
      <nav className="flex text-center  lg:flex-row md:flex-row flex-col   font-Main justify-around gap-8 md:gap-5 lg:gap-8 lg:m-3  md:m-0 lg:text-lg md:text-lg text-xl text-white  flex-wrap transition-all duration-200 ">
        {navbars.map((nav) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ` underline  underline-offset-4 decoration-green-500 `
                : ` `
            }
            to={nav.navLink}
            key={nav.navLink}
          >
            <h1 className="hover:scale-105  font-extralight  hover:text-slate-300 transition-all ">
              {" "}
              {nav.navName}
            </h1>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
