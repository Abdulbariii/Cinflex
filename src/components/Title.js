import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../hook/useTheme";
export default function Title() {
  const { color } = useTheme();
  return (
    <div>
      <div className="flex flex-col justify-around items-start p-10 ">
        <div className="m-10 flex flex-col justify-around">
          <h1 className="text-5xl text-indigo-900 font-medium  ">
            Find <span className={`font-semibold text-indigo-700`}>movies</span>{" "}
            with us
          </h1>
          <p className="text-red-500 font-extralight text-lg">
            DON'T FORGET POP CORN
          </p>
        </div>

        <Link
          to="/movies"
          className={`m-10  flex justify-start items-center transition-all   w-60 h-14 p-5 font-light text-3xl text-white rounded-lg ${color} hover:bg-indigo-800 hover:scale-105`}
        >
          Browes Movie
        </Link>
      </div>
    </div>
  );
}
