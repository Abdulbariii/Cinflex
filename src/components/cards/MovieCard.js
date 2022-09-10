import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";
import "./Animation.css";

import { AiOutlinePlayCircle } from "react-icons/ai";
export default function MovieCard(props) {
  const { color } = useTheme();
  return (
    <div className="flex  flex-wrap  gap-1 mx-10">
      {props.movies &&
        props.movies.results &&
        props.movies.results
          .slice(props.pagesVisited, props.pagesVisited + props.userPerPage)
          .map((movie) => (
            <div key={movie._id} className="w-40  card-con  h-52   relative">
              <img
                src={movie.image && movie.image}
                className="absolute w-full  h-full object-cover"
                alt="img"
              />
              <div
                className={`absolute bottom-0 mt-5 card bg-slate-900 rounded-none font-cool    bg-opacity-90 flex transition-all justify-around items-center flex-col h-0    overflow-hidden w-full`}
              >
                <h1 className="text-gray-50   text-sm">
                  {movie.title} , {movie.year}
                </h1>

                <Link
                  className={` flex justify-center transition-all items-center hover:text-rose-800  text-rose-500 shadow-sm text-6xl`}
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
