import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  const pages = [
    { nameOfPage: "Home", linkOfPage: "/" },
    { nameOfPage: "Movies", linkOfPage: "/movies" },
    { nameOfPage: "About", linkOfPage: "/about" },
    { nameOfPage: "Login", linkOfPage: "/signup" },
  ];

  return (
    <div className="h-screen w-full flex items-center justify-between ">
      <h1 className="text-9xl font-Main text-white">CINFLEX</h1>

      <div className="flex flex-col gap-10">
        {pages.map((page) => (
          <Link
            className="text-6xl text-[#fff] font-Main hover:text-green-500 "
            to={page.linkOfPage}
          >
            {page.nameOfPage}
          </Link>
        ))}
      </div>
    </div>
  );
}
