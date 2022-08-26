import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";
import "./Animation.css";

export default function MovieCard(props) {
  const { color } = useTheme();
  return (
    <div className="flex flex-wrap gap-1 ml-20 mr-20">
      {props.movies &&
        props.movies.results.map((movie) => (
          <div key={movie._id} className="w-40 rounded-sm card-con  h-60 relative">
            <img
              src={movie.image}
              className="absolute w-full rounded-sm h-full object-cover"
              alt="img"
            />
            <div
              className={`absolute bottom-0 card  ${color} bg-opacity-80 flex transition-all justify-around items-start flex-col h-0    overflow-hidden w-full`}
            >
              <h1 className="text-gray-50  text-xl">{movie.title}</h1>
              <h1 className="text-gray-50 text-lg">{movie.year}</h1>
              <Link
                className={`text-xl rounded-sm h-8 ${color} p-2 flex justify-center transition-all items-center text-gray-50 shadow-sm shadow-[#00000079] hover:shadow-lg hover:shadow-[#00000079]`}
                to={`/movieDetail/${movie._id}`}
              >
                Watch
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
