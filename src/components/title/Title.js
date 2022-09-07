import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";

export default function Title() {
  const { mode } = useTheme();
  const { color } = useTheme();
  return (
    <div className="mt-16">
      <div className="flex flex-col justify-around items-center gap-20 pt-10 ">
        <h1 className=" text-transparent text-center font-title md:text-6xl lg:text-8xl text-5xl  bg-clip-text bg-gradient-to-r from-purple-100 to-white ">
          Go0d{" "}
          <span className=" decoration-cyan-400 underline-offset-4 underline decoration-2">
            Films
          </span>{" "}
          Make Your Life{" "}
          <span className="decoration-red-400 scale-125 underline-offset-4 underline decoration-2">
            {" "}
            Better
          </span>
        </h1>

        <Link
          to="/movies"
          className={` text-rose-50 hover:text-rose-500 hover:bg-opacity-80 active:scale-100 bg-rose-500 flex justify-center items-center transition-all  w-72  md:w-80 p-3 rounded-full  hover:bg-white hover:border-rose-500 hover:border-2   duration-200  font-cool text-3xl md:text-4xl hover:scale-105`}
        >
          Browes Movies
        </Link>
      </div>
    </div>
  );
}
