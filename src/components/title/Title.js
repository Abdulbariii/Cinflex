import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";
import { BsArrowRight } from "react-icons/bs";

export default function Title() {
  const { mode } = useTheme();
  const { color } = useTheme();
  return (
    <div className="mt-16">
      <div className=" flex ">
        <h1 className=" text-transparent  font-Main md:text-6xl lg:text-9xl text-start text-7xl  bg-clip-text bg-gradient-to-r from-purple-100 to-white ">
          Good Films Make Your Life Better
        </h1>

        <Link
          to="/movies"
          className={` text-rose-50 hover:text-black h-fit hover:bg-opacity-80 active:scale-100  flex justify-center items-center transition-all    p-3   hover:bg-white  hover:border-2   duration-200  font-cool text-3xl md:text-4xl hover:scale-105`}
        >
          Browes Movies
          <div className=" ml-10 text-3xl ">
            <BsArrowRight></BsArrowRight>
          </div>
        </Link>
      </div>
    </div>
  );
}
