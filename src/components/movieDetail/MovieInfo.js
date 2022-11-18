import React, { useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { CutText } from "../../utility/cutText";
import PlayMovies from "./PlayMovies";
import Recommend from "./Recommend";
import Hr from "../lines/Hr";
import { MdOutlineLocalMovies } from "react-icons/md";
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
      {/* buton && image */}
      <div
        ref={backCover}
        className="flex lg:flex-row md:flex-row flex-col lg:gap-36 md:gap-36 gap-7 items-center w-full h-full text-white "
      >
        <img
          className="lg:h-[40rem] md:h-[40rem] lg:w-[32rem] md:w-[32rem] w-[18rem] object-cover  "
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

          <div className="flex flex-col justify-center items-center gap-5 my-2 ">
            <button
              onClick={goToWatchSection}
              href="watch-stream"
              className={`lg:text-5xl lg:px-16 md:px-14 px-3
              md:text-4xl text-3xl
              py-4
              lg:py-2 md:py-2 text-[#000000]   hover:text-green-500 hover:border-2 hover:border-gray-50  bg-gray-50 hover:bg-[#000000] transition-all font-Main text-center flex items-center gap-8`}
            >
              {/* watch butn */}
              <span className="ml-2">Watch now</span>
              <div className="lg:text-7xl md:text-5xl text-4xl ">
                <MdOutlineLocalMovies></MdOutlineLocalMovies>
              </div>
            </button>
            <Link to={"trailar"}>
              <p
                className={`lg:text-5xl  md:text-5xl text-3xl lg:px-16 md:px-14 px-12 py-2 text-[#000000]   hover:text-green-500 hover:border-2 hover:border-gray-50  bg-gray-50 hover:bg-[#000000] transition-all font-Main hover:flex-col text-center flex items-center gap-8`}
              >
                Trailer
              </p>
            </Link>
          </div>
        </div>
        <Outlet></Outlet>
      </div>

      <div className="mt-20">
        {/* rating genre realase */}
        <div className="text-transparent leading-snug items-center font-Main  flex lg:flex-row md:flex-row flex-col  gap-6 text-2xl  text-white ">
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
        {/* description */}
        <div className="lg:mt-0 md:mt-0 mt-14 text-transparent items-center leading-snug font-Main  flex  gap-5 text-2xl  text-white lg:flex-row md:flex-row flex-col ">
          <h1 className="text-4xl font-medium "> Description </h1>
          <Hr ></Hr>
          <p className="font-cool text-2xl  ">
            {" "}
            {CutText(data.result.description, 300)}
          </p>
        </div>
      </div>

      <div ref={watchSection}>
        {data && data.result.embedUrls && data.result.embedUrls.length === 0 ? (
          <PlaySeries dataSeries={data && data.result}></PlaySeries>
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
