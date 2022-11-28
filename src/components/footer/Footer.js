import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Footer() {


const Navigate=useNavigate('');


  const pages = [
    { nameOfPage: "Home", linkOfPage: "/" },
    { nameOfPage: "Movies", linkOfPage: "/movies" },
    { nameOfPage: "About", linkOfPage: "/about" },
    { nameOfPage: "Login", linkOfPage: "/signup" },
  ];

  return (
    <div className="h-screen w-full  flex items-center justify-between ">
      <h1 className="lg:text-9xl md:text-7xl text-3xl font-Main text-white">CINFLEX</h1>

      <div className="flex flex-col gap-10">
        {pages.map((page) => (
          <Link
          //it's take me to the start of the page
          
          onClick={()=>{  window.scrollTo(0, 0)
          }}
            className="lg:text-6xl md:text-4xl text-2xl text-center text-[#fff] font-Main hover:text-green-500 "
            to={page.linkOfPage}
          >
            {page.nameOfPage}
          </Link>
        ))}
      </div>
    </div>
  );
}
