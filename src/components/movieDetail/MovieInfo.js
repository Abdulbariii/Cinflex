import React, { useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { CutText } from "../../utility/cutText";
import PlayMovies from "./PlayMovies";
import Recommend from "./Recommend";
import Hr from "../lines/Hr";
import { MdOutlineLocalMovies } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import Vr from "../lines/Vr";
import PlaySeries from "./PlaySeries";

export default function MovieInfo({ data }) {
  console.log(data);

  const watchSection = useRef(null);
  const backCover = useRef(null);

  const goToWatchSection = () => {
    window.scrollTo({
      top: watchSection.current.offsetTop,
      behavior: "smooth",
    });
  };
  const goToBack = () => {
    window.scrollTo({
      top: backCover.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col gap-28 py-10">
      <div
        ref={backCover}
        className="flex gap-36 items-center w-full h-full text-white "
      >
        <img
          className="h-[40rem] w-[32rem] object-cover  "
          src={
            data.result.image
              ? data.result.image.replace("w300", "w500")
              : "https://delpireandco.com/wp-content/uploads/2021/08/erwitt-found-not-lost-1-scaled.jpg"
          }
          alt=""
        />

        <div className="flex  flex-col gap-10">
          {/* btn */}

          <div className="">
            <h1 className="text-transparent leading-snug  font-Main md:text-6xl lg:text-9xl text-start text-7xl  bg-clip-text bg-gradient-to-r from-purple-100 to-white   ">
              {data.result.titleOriginal}{" "}
            </h1>
          </div>

          <div className="flex flex-col justify-start items-start gap-5 my-2 ">
            <button
              onClick={goToWatchSection}
              href="watch-stream"
              className={`text-5xl px-16 py-2 text-[#000000]   hover:text-green-500 hover:border-2 hover:border-gray-50  bg-gray-50 hover:bg-[#000000] transition-all font-Main text-center flex items-center gap-8`}
            >
              <span className="ml-2">Watch now</span>
              <div className="text-7xl ">
                <MdOutlineLocalMovies></MdOutlineLocalMovies>
              </div>
            </button>
            <Link to={"trailar"}>
              <p
                className={`text-5xl px-16 py-2 text-[#000000]   hover:text-green-500 hover:border-2 hover:border-gray-50  bg-gray-50 hover:bg-[#000000] transition-all font-Main hover:flex-col text-center flex items-center gap-8`}
              >
                Trailer
              </p>
            </Link>
          </div>
        </div>
        <Outlet></Outlet>
      </div>

      <div className="mt-20">
        <div className="text-transparent leading-snug items-center font-Main  flex gap-6 text-2xl  text-white ">
          <p className="">
            {" "}
            <span className="  text-4xl">Release</span> {data.result.release}
          </p>
          <Hr></Hr>
          <p className="font">
            {" "}
            <span className=" text-4xl font-medium">Gener </span>{" "}
            {data.result.genres[0].name}
          </p>
          <Hr></Hr>
          <p>
            {" "}
            <span className=" text-4xl font-medium">Rating </span>
            {data.result.rating}
          </p>
        </div>
      </div>

      <div>
        <div className=" text-transparent items-center leading-snug font-Main  flex gap-5 text-2xl  text-white ">
          <h1 className="text-4xl font-medium "> Description </h1>
          <Hr></Hr>
          <p className="font-cool text-2xl  ">
            {" "}
            {CutText(data.result.description, 300)}
          </p>
        </div>
      </div>

      <div ref={watchSection}>
        {data && data.result.embedUrls && data.result.embedUrls.length == 0 ? (
          <PlaySeries></PlaySeries>
        ) : (
          <PlayMovies dataServer={data && data.result.embedUrls}></PlayMovies>
        )}
      </div>

      <div>
        <Recommend
          goToBack={goToBack}
          genres={data && data.result.genres[0].uuid}
        ></Recommend>
      </div>
    </div>
  );
}
