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
      <form className="flex text-white  font-Main gap-5 p-2 items-end justify-around ">
        <label className="relative text-4xl ">
          {/* input */}

          <input
            onChange={(e) => getTitle(e.target.value)}
            placeholder="Search"
            className={`w-96 border-2 border-white h-12    text-2xl   bg-black px-14   text-white `}
          />
          <div className=" text-3xl absolute top-3 ml-2 left-2 ">
            <AiOutlineSearch></AiOutlineSearch>
          </div>
        </label>

        <label className="flex text-white flex-col gap-2   w-52 ">
          <span className={`font-Main  text-lg`}>Geners</span>

          <select
            onChange={(e) => {
              getGeners(e.target.value.toLowerCase());
            }}
            className={`bg-black w-60 h-12 border-2 border-white text-2xl`}
          >
            {data &&
              data.results.map((genere) => {
                return (
                  <option
                    className="text-white"
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

        <label className="flex text-white flex-col gap-2   w-52 ">
          <span className={` font-Main  text-lg`}>Year</span>
          <select
            // value={years}
            onChange={(e) => getYear(e.target.value)}
            className={`bg-black w-60 h-12 border-2 border-white text-2xl`}
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
