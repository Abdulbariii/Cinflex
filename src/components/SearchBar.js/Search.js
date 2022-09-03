import React, { useState, useEffect } from "react";
import { useFetch } from "../../hook/useFetch";
import useTheme from "../../hook/useTheme";

export default function Search() {
  const { mode, getYear, getGeners, getTitle } = useTheme();
  const url = `https://movies-app1.p.rapidapi.com/api/genres`;
  const { data } = useFetch(url);
  const [years, setYears] = useState();

  // create link
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bebf8be787mshb2b4237a28f4e93p1ea88fjsn121587fcbbd8",
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
            {/* input */}

            <input
              onChange={(e) => getTitle(e.target.value)}
              placeholder="Search"
              className={`w-72 h-8  shadow-lg  shadow-[#0000003a]  text-black p-1 rounded-sm ${
                mode === "bg-gray-50" ? "bg-gray-50" : "bg-gray-900"
              }`}
            />
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
              // value={years}
              onChange={(e) => getYear(e.target.value)}
              className={`h-8 p-1 flex justify-center items-center rounded-sm shadow-lg  shadow-[#0000003a]  text-black   ${
                mode === "bg-gray-50"
                  ? "bg-gray-50 text-gray-900"
                  : "bg-gray-900 text-gray-50"
              }`}
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
