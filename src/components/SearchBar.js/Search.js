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
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bebf8be787mshb2b4237a28f4e93p1ea88fjsn121587fcbbd8',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    }
  };
  useEffect(() => {
    fetch("https://movies-app1.p.rapidapi.com/api/years", options)
      .then((response) => response.json())
      .then((response) => setYears(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-wrap items-center w-full">
      {/* era */}
      <form
        className="flex lg:flex-row md:flex-row
      flex-col
      text-white  font-Main  lg:p-2 md:p-2 items-end justify-between lg:gap-44 md:gap-10 gap-12 w-full "
      >
        <label className="relative text-4xl ">
          {/* input */}

          <input
            onChange={(e) => getTitle(e.target.value)}
            placeholder="Search"
            className={`lg:w-96  border-2 border-white h-12    text-2xl   bg-black lg:px-14 md:px-14 px-2    text-white `}
          />
          <div className=" text-3xl absolute top-3  ml-2 right-3 ">
            <AiOutlineSearch></AiOutlineSearch>
          </div>
        </label>
        {/* genere year */}
        <div
          className="flex flex-wrap lg:flex-row md:flex-row
      flex-col  self-center  lg:gap-20 md:gap-8 gap-10"
        >
          <label className="flex text-white flex-col gap-2   lg:w-52 md:w-18 ">
            <span className={`font-Main  text-lg`}>Geners</span>

            <select
              onChange={(e) => {
                getGeners(e.target.value.toLowerCase());
              }}
              className={`bg-black md:w-40 lg:w-60 h-12 border-2 border-white text-2xl`}
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

          <label className="flex text-white flex-col gap-2  md:w-12 lg:w-52 ">
            <span className={` font-Main  text-lg`}>Year</span>
            <select
              // value={years}
              onChange={(e) => getYear(e.target.value)}
              className={`bg-black md:w-40 lg:w-60 h-12 border-2 border-white text-2xl`}
            >
              {years &&
                years.results.map((year) => (
                  <option value={year.name} key={year.name}>
                    {year.name}
                  </option>
                ))}
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}
