import React from "react";
import { useFetch } from "../../hook/useFetch";

import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Hr from "../lines/Hr";
// import required modules
import { Pagination } from "swiper";
export default function Recommend({ genres, goToBack }) {
  let url = `https://movies-app1.p.rapidapi.com/api/movies?query=${""}&
    page=1&limit=8&year=${""}&genres=${genres}`;

  const { data } = useFetch(url);
  const [slideOne, setSlideOne] = useState([]);

  useEffect(() => {
    setSlideOne(data && data.results);
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-4xl  mb-10 font-Main text-white  ">You may like</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {data &&
          data.results &&
          data.results.map((e) => (
            <SwiperSlide className="text-green-500">
              <div className="flex flex-col  items-start justify-start gap-3 mb-20 text-green-500">
                <div className="card-con relative  hover:scale-105 transition-all ">
                  <img
                    className="h-96 w-96 object-contain  "
                    src={
                      e.image
                        ? e.image.replace("w300", "w500")
                        : "https://delpireandco.com/wp-content/uploads/2021/08/erwitt-found-not-lost-1-scaled.jpg"
                    }
                  ></img>
                  <div
                    className={`absolute bottom-0 mt-5 card bg-slate-900 rounded-none font-cool    bg-opacity-90 flex transition-all justify-around items-center flex-col h-0    overflow-hidden w-full`}
                  >
                    <h1 className="text-gray-50  md:text-2xl  text-sm">
                      {e.title} , {e.year}
                    </h1>

                    <Link
                      onClick={goToBack}
                      className={` flex justify-center transition-all items-center text-green-500 hover:text-green-500 hover:scale-110 md:text-7xl  shadow-sm text-sm`}
                      to={`/movieDetail/${e._id}`}
                    >
                      <h1 className="text-green-500 font-Main md:text-4xl text-sm  ">
                        WATCH
                      </h1>
                    </Link>
                    <Hr></Hr>
                  </div>
                </div>
                <h1 className="text-gray-50 font-Main  md:text-xl text-[10px]">
                  {e.title}
                </h1>
              </div>

              <Hr></Hr>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
