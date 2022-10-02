import React, { useState, useEffect } from "react";
import { useFetch } from "../../hook/useFetch";
import useTheme from "../../hook/useTheme";

import { AiOutlineSearch } from "react-icons/ai";
export default function Search() {
  const { mode, getYear, getGeners, getTitle } = useTheme();
  const url = `https://movies-app1.p.rapidapi.com/api/genres`;
  const { data } = useFetch(url);
  const [years, setYears] = useState();

  // create link
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4b40e1034cmshbb08bee3fd39ed0p1fbc56jsn085af3231bbb",
      "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch("https://movies-app1.p.rapidapi.com/api/years", options)
      .then((response) => response.json())
      .then((response) => setYears(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex items-center">
      <form className="flex flex-col  gap-5 p-2 items-start justify-around ">
        <div>
          <label className="relative text-4xl text-rose-900">
            {/* input */}

            <input
              onChange={(e) => getTitle(e.target.value)}
              placeholder="Search"
              className={`w-80 h- fit relative   rounded-3xl  shadow-lg  shadow-[#0000003a]   px-14 py-2  text-xl text-white bg-black`}
            />
            <div className=" absolute top-2 left-2 ">
              <AiOutlineSearch></AiOutlineSearch>
            </div>
          </label>
        </div>

        <label className="flex flex-col gap-2  text-rose-500 w-52 p-2">
          <span className={` text-slate-600 font-medium text-lg`}>Geners</span>

          <select
            onChange={(e) => {
              getGeners(e.target.value.toLowerCase());
            }}
            className={`h-12 text-center  text-2xl rounded-3xl flex justify-center w-52 text-rose-500 items-center  shadow-lg    bg-black`}
          >
            {data &&
              data.results.map((genere) => {
                return (
                  <option
                    className="text-rose-500"
                    key={genere.name && genere.name}
                    value={genere.name && genere.name}
                  >
                    {" "}
                    {genere.name && genere.name}
                  </option>
                );
              })}
          </select>
        </label>

        <label className="flex flex-col gap-2  p-2">
          <span className={` text-slate-600 font-medium text-lg`}>Year</span>
          <select
            // value={years}
            onChange={(e) => getYear(e.target.value)}
            className={`h-12 text-center  text-2xl rounded-3xl flex justify-center w-52 text-rose-500 items-center  shadow-lg    bg-black`}
          >
            {years &&
              years.results.map((year) => (
                <option value={year.name} key={year.name}>
                  {year.name}
                </option>
              ))}
          </select>
        </label>
      </form>
    </div>
  );
}

/**   <select
              onChange={(e) => {
                getGeners(e.target.value.toLowerCase());
              }}
              className={`h-8 p-1 flex justify-center items-center rounded-sm  shadow-lg  shadow-[#0000003a]  text-black  ${
                mode === "bg-gray-50"
                  ? "bg-gray-50 text-gray-900"
                  : "bg-gray-900 text-gray-50"
              }`}
            >
              {data &&
                data.results.map((genere) => {
                  return (
                    <option
                      key={genere.name && genere.name}
                      value={genere.name && genere.name}
                    >
                      {" "}
                      {genere.name7 && genere.name}
                    </option>
                  );
                })}
            </select>**/
