import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";
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
    <div className={""}>
      <nav className="flex justify-around gap-5 m-3 md:m-0 text-lg text-white  flex-wrap transition-all duration-200 ">
        {navbars.map((nav) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ` underline  underline-offset-4 decoration-red-400 `
                : ` `
            }
            to={nav.navLink}
            key={nav.navLink}
          >
            <h1 className="hover:scale-105 font-cool font-extralight  hover:text-slate-300 transition-all ">
              {" "}
              {nav.navName}
            </h1>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
