import React from "react";
import Cards from "../components/cards/Cards";
import Dashboard from "../components/Navigation/Dashboard";
import {motion as m} from 'framer-motion';
export default function Movies() {
  return (
    <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.75,ease:"easeOut"}}
     className="flex justify-start items-start flex-col gap-5 py-5">
      <div>
        <Dashboard></Dashboard>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center">
        <Cards />
      </div>
    </m.div>
  );
}
