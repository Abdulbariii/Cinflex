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
    url: "https://movies-app1.p.rapidapi.com/api/genres",
    headers: {
      "X-RapidAPI-Key": "f6bafe28f6mshf70719373781ec6p1fec85jsn2d462831e2a7",
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
              className={`w-64 h-10 fit relative   rounded-3xl  shadow-lg  shadow-[#0000003a] border-2 border-rose-500 hover:border-opacity-50 outline-none border-opacity-30 px-14 py-2  text-lg text-white bg-slate-900`}
            />
            <div className=" text-3xl absolute top-3 ml-2 left-2 ">
              <AiOutlineSearch></AiOutlineSearch>
            </div>
          </label>
        </div>

        <label className="flex flex-col gap-2  text-rose-500 w-52 p-2">
          <span className={` text-slate-400 font-medium text-lg`}>Geners</span>

          <select
            onChange={(e) => {
              getGeners(e.target.value.toLowerCase());
            }}
            className={`h-10 text-center  text-xl rounded-3xl flex hover:border-opacity-50 outline-none border-opacity-30 justify-center w-40 text-rose-500 items-center  shadow-lg  border-2 border-rose-500   bg-slate-900`}
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
          <span className={` text-slate-400 font-medium text-lg`}>Year</span>
          <select
            // value={years}
            onChange={(e) => getYear(e.target.value)}
            className={`h-10 text-center  text-xl rounded-3xl flex justify-center w-40 hover:border-opacity-50 outline-none border-opacity-30 border-2 border-rose-500 text-rose-500 items-center  shadow-lg    bg-slate-900`}
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
