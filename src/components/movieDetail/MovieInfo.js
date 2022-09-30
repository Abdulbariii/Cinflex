import React from "react";
import { Outlet, Link } from "react-router-dom";
import { CutText } from "../../utility/cutText";
export default function MovieInfo({ data }) {
  console.log(data);
  return (
    <div className="flex justify-between gap-20 items-start w-full h-full text-white ">
      <div>
        <img
          className="h-[30rem] max-w-none object-cover  "
          src={
            data.result.image
              ? data.result.image
              : "https://delpireandco.com/wp-content/uploads/2021/08/erwitt-found-not-lost-1-scaled.jpg"
          }
          alt=""
        />
      </div>
      <div className="flex flex-col gap-10">
        {/* btn */}

        <div>
          <h1 className="bold text-5xl font-cool  ">{data.result.title} </h1>
        </div>

        <div className="flex items-center gap-5 my-2 ">
          <button
            className={` p-3 bg-rose-500  text-xl flex justify-center items-center rounded-3xl text-white w-56 h-12 hover:bg-opacity-80 transition-all duration-150`}
          >
            Watch now
          </button>
          <Link to={"trailar"}>
            <p
              className={` bg-slate-900 shadow-lg border-rose-500 border-2 text-rose-500 rounded-3xl  h-12 p-2  w-24  text-xl flex justify-center items-center `}
            >
              Trailer
            </p>
          </Link>

          <p className=" p-2 shadow-lg   text-rose-500">HD</p>
        </div>
        <div className="text-2xl">
          <p>Release: {data.result.release}</p>
          <p className="font">Genere: {data.result.genres[0].name}</p>
          <p>Rank: {data.result.rating}</p>
        </div>
        <div>
          <p className=" "> description : {data.result.description}</p>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
