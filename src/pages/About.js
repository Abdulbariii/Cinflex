import React from "react";
import AboutUs from "../components/About/AboutUs";
import Team from "../components/About/Team";
import {motion as m }from 'framer-motion'

export default function About() {
  return (
    <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.75,ease:"easeOut"}}
    
    
    className="flex flex-col gap-20 md:items-start items-center lg:items-start py-5 justify-center min-h-screen w-full">
      <AboutUs></AboutUs>
      <Team></Team>
    </m.div>
  );
}
