import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";
import "./Animation.css";

import { AiOutlinePlayCircle } from "react-icons/ai";
export default function MovieCard(props) {
  const { color } = useTheme();
  return (
    <div className="flex  flex-wrap  gap-6 ">
      {props.movies &&
        props.movies.results &&
        props.movies.results
          .slice(props.pagesVisited, props.pagesVisited + props.userPerPage)
          .map((movie) => (
            <div key={movie._id} className="w-64 card-con  h-96  relative">
              <img
                src={movie.image && movie.image.replace("w300", "w500")}
                className="absolute w-full transition-all duration-150 img-scale h-full object-cover"
                alt="img"
              />
              <div
                className={`absolute bottom-0 mt-5 card bg-slate-900 rounded-none font-cool    bg-opacity-90 flex transition-all justify-around items-center flex-col h-0    overflow-hidden w-full`}
              >
                <h1 className="text-gray-50   text-2xl">
                  {movie.title} , {movie.year}
                </h1>

                <Link
                  className={` flex justify-center transition-all items-center text-green-500 hover:text-green-500 hover:scale-110  shadow-sm text-7xl`}
                  to={`/movieDetail/${movie._id}`}
                >
                  <AiOutlinePlayCircle></AiOutlinePlayCircle>
                </Link>
              </div>
            </div>
          ))}
    </div>
  );
}
