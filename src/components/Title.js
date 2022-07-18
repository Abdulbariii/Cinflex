import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../hook/useTheme";

export default function Title() {
  const { mode } = useTheme();
  const { color } = useTheme();
  return (
    <div className="mt-16">
      <div className="flex flex-col justify-around items-start p-10 ">
        <div className="m-10 flex flex-col justify-around">
          <h1
            className={`text-5xl  font-light ${
              mode === "bg-gray-50" ? "text-black" : "text-white"
            }  `}
          >
            Find{" "}
            <span
              className={`font-medium  ${
                mode === "bg-gray-50" ? "text-indigo-900" : "text-indigo-50"
              }  `}
            >
              movies
            </span>{" "}
            with us
          </h1>
        </div>

        <Link
          to="/movies"
          className={`m-10  flex justify-center items-center transition-all   w-52 h-12 font-extralight text-2xl ${
            color === "bg-yellow-500" ? "text-black" : "text-white"
          } rounded-sm ${color} hover:filter hover:invert-[5%] hover:scale-105`}
        >
          Browes Movie
        </Link>
      </div>
    </div>
  );
}
