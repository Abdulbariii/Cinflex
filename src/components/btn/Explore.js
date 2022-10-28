import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Explore() {
  return (
    <div className="">
      <Link
        to={"/movies"}
        className="text-5xl px-16 py-2   hover:text-green-500 hover:border-2 hover:border-gray-50  bg-gray-50 hover:bg-[#000000] transition-all font-Main  text-center flex items-center gap-8 "
      >
        <span className="mb-2">Explore</span>
        <div className="text-7xl ">
          <BsArrowRight></BsArrowRight>
        </div>
      </Link>
    </div>
  );
}
