import React from "react";
import { Link } from "react-router-dom";
export default function Title() {
  return (
    <div>
      <div className="flex flex-col justify-around items-start p-10 ">
        <div className="m-10 flex flex-col justify-around">
          <h1 className="text-5xl text-indigo-900 font-medium  ">
            Find <span className="font-semibold text-indigo-700">movies</span>{" "}
            with us
          </h1>
          <p className="text-red-500 font-extralight text-lg">
            DON'T FORGET POP CORN
          </p>
        </div>

        <Link
          to="/movies"
          className=" m-10  flex justify-start items-center transition-all   w-60 h-14 p-5 font-light text-3xl text-white rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-800 hover:bg-gradient-to-r from-indigo-800 to-indigo-400"
        >
          Browes Movie
        </Link>
      </div>
    </div>
  );
}
