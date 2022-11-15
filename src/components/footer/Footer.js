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
    <div className="h-screen w-full  flex items-center justify-between ">
      <h1 className="lg:text-9xl md:text-9xl text-3xl font-Main text-white">CINFLEX</h1>

      <div className="flex flex-col gap-10">
        {pages.map((page) => (
          <Link
            className="lg:text-6xl md:text-6xl text-2xl text-center text-[#fff] font-Main hover:text-green-500 "
            to={page.linkOfPage}
          >
            {page.nameOfPage}
          </Link>
        ))}
      </div>
    </div>
  );
}
