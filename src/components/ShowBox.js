import React from "react";

import useTheme from "../hook/useTheme";
export default function ShowBox(props) {
  const { color } = useTheme();
  return (
    <div className="flex flex-col ">
      <div>
        <h1 className={`${color} text-white`}>Newest movies </h1>
      </div>
      <div className="flex-wrap justify-end w-fit items-end gap-1 flex container ">
        {props.movies &&
          props.movies.results.map((movie) => (
            <div className="relative lg:h-72 lg:w-48 w-28 h-52 md:w-28 flex flex-wrap gap-1">
              <img
                src={movie.image}
                className="absolute w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
