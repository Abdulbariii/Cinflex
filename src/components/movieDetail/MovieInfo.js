import React, { useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { CutText } from "../../utility/cutText";
import PlayMovies from "./PlayMovies";
import Recommend from "./Recommend";
import Hr from "../lines/Hr";
export default function MovieInfo({ data }) {
  console.log(data);

  const watchSection = useRef(null);

  const goToWatchSection = () => {
    window.scrollTo({
      top: watchSection.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col gap-28">
      <div className="flex justify-between gap-20 items-start w-full h-full text-white ">
        <div>
          <img
            className="h-[30rem] rounded-md max-w-none object-cover  "
            src={
              data.result.image
                ? data.result.image
                : "https://delpireandco.com/wp-content/uploads/2021/08/erwitt-found-not-lost-1-scaled.jpg"
            }
            alt=""
          />
        </div>
        <div className="flex  flex-col gap-10">
          {/* btn */}

          <div>
            <h1 className="bold text-7xl font-cool  ">
              {data.result.titleOriginal}{" "}
            </h1>
          </div>

          <div className="flex items-center gap-5 my-2 ">
            <button
              onClick={goToWatchSection}
              href="watch-stream"
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

            <p className=" p-2 shadow-lg   text-slate-500">HD</p>
          </div>
          <div className="text-xl flex flex-wrap gap-4 items-center bg-gradient-to-r from-slate-900   p-3 bg-opacity-45   transition-all rounded-xl">
            <p>
              {" "}
              <span className="  font-medium">Release:</span>{" "}
              {data.result.release}
            </p>
            <p className="font">
              {" "}
              <span className="  font-medium">Gener: </span>{" "}
              {data.result.genres[0].name}
            </p>
            <p>
              {" "}
              <span className=" text-amber-500 font-medium">Rating: </span>
              {data.result.rating}
            </p>
          </div>

          <div className=" bg-gradient-to-r w-[40rem] from-[#f43f5d39]  p-3  rounded-xl ">
            <h1 className="text-3xl font-medium mb-4"> Description </h1>
            <p className="font-cool text-lg  ">
              {" "}
              {CutText(data.result.description, 300)}
            </p>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <Hr></Hr>
      <div ref={watchSection}>
        <PlayMovies dataServer={data && data.result.embedUrls}></PlayMovies>
      </div>

      <Hr></Hr>
      <div ref={watchSection}>
        <Recommend genres={data && data.result.genres[0].uuid}></Recommend>
      </div>
    </div>
  );
}
