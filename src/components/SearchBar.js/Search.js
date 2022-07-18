import React from "react";
import useTheme from "../../hook/useTheme";

export default function Search() {
  const { mode, color } = useTheme();
  return (
    <div className="flex items-center">
      <form className="flex gap-2 p-2 items-center justify-around ">
        <div>
          <label className="flex flex-col gap-2 ">
            <span
              className={`${
                mode === "bg-gray-50" ? " text-gray-900" : " text-gray-50"
              }`}
            >
              Search
            </span>
            <input
              placeholder="Search"
              className={`w-72 h-8 shadow shadow-lg  shadow-[#0000003a]  text-black p-1 rounded-sm ${
                mode === "bg-gray-50" ? "bg-gray-50" : "bg-gray-900"
              }`}
            ></input>
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2 ">
            <span
              className={`${
                mode === "bg-gray-50" ? " text-gray-900" : " text-gray-50"
              }`}
            >
              Geners
            </span>
            <select
              className={`h-8 p-1 flex justify-center items-center rounded-sm shadow shadow-lg  shadow-[#0000003a]  text-black p-1 rounded-sm ${
                mode === "bg-gray-50"
                  ? "bg-gray-50 text-gray-900"
                  : "bg-gray-900 text-gray-50"
              }`}
            >
              <option className="">Action</option>
              <option>Drama</option>
            </select>
          </label>
        </div>

        <div>
          <label className="flex flex-col gap-2 ">
            <span
              className={`${
                mode === "bg-gray-50" ? " text-gray-900" : " text-gray-50"
              }`}
            >
              Year
            </span>
            <select
              className={`h-8 p-1 flex justify-center items-center rounded-sm shadow shadow-lg  shadow-[#0000003a]  text-black p-1 rounded-sm ${
                mode === "bg-gray-50"
                  ? "bg-gray-50 text-gray-900"
                  : "bg-gray-900 text-gray-50"
              }`}
            >
              <option className="">2022</option>
              <option>2020</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}
