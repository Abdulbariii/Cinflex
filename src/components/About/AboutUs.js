import React from "react";

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-6 py-20 ">
      <h1 className="text-transparent leading-snug  font-Main md:text-6xl lg:text-9xl text-start text-6xl  bg-clip-text bg-gradient-to-r from-purple-100 to-white ">
        About
      </h1>
      <h1 className="lg:text-3xl md:text-2xl lg:text-left md:text-left  text-justify text-slate-50 lg:leading-0 md:leading-0  leading-8 font-Main">
        Cinflex is a free streaming website where you can watch movies and tv
        series online with multiple genres highlights such as Action, Comedy,
        Shooting, Sport, History, Thriller,... Cinflex updates new HD Movies and
        Shows Daily so you will never miss your favorite title.
      </h1>
    </div>
  );
}
