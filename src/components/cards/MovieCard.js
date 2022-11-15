import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";
import "./Animation.css";
import Hr from "../lines/Hr";
export default function MovieCard(props) {
  return (
    // flex  flex-wrap  gap-3
    // 
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x3 lg:gap-x-3 gap-x-16 place-items-center  ">
      {props.movies &&
        props.movies.results &&
        props.movies.results
          .slice(props.pagesVisited, props.pagesVisited + props.userPerPage)
          .map((movie) => (
            <div
              key={movie._id}
              className="lg:w-72 md:w-72 w-44  mb-20 card-con  h-[30rem]  relative"
            >
              <img
                src={movie.image && movie.image.replace("w300", "w500")}
                className="absolute w-full transition-all duration-150 img-scale h-full object-cover"
                alt="img"
              />

              <div
                className={`absolute bottom-0 mt-5 card bg-slate-900 rounded-none font-cool    bg-opacity-90 flex transition-all justify-around items-center flex-col h-0    overflow-hidden w-full`}
              >
                <h1 className="text-gray-50  font-Main  lg:text-3xl md:text-3xl text-2xl">
                  {movie.title} , {movie.year}
                </h1>

                <Link
                  className={` flex justify-center transition-all items-center text-green-500 hover:text-green-500 hover:scale-150  shadow-sm text-7xl`}
                  to={`/movieDetail/${movie._id}`}
                >
                  <h1 className="text-green-500 font-Main md:text-6xl text-4xl lg:text-6xl ">WATCH</h1>
                </Link>
                <Hr></Hr>
              </div>
            </div>
          ))}
    </div>
  );
}
