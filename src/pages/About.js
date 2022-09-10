import React from "react";
import AboutUs from "../components/About/AboutUs";
import Team from "../components/About/Team";
export default function About() {
  return (
    <div className="flex flex-col gap-20 items-start md:px-40 py-5 justify-center min-h-screen w-full">
      <AboutUs></AboutUs>
      <Team></Team>
    </div>
  );
}
