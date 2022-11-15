import React from "react";
import Yaqub from "../../img/Yaqub.jpg";
import Abdulbari from "../../img/Abdulbari Qaisar_Iraq_2022.jpg";

import { AiOutlineGithub } from "react-icons/ai";
export default function Team() {
  return (
    <div className="flex flex-col gap-10 ">
      <h1 className="text-transparent leading-snug  font-Main md:text-6xl lg:text-9xl text-start text-7xl  bg-clip-text bg-gradient-to-r from-purple-100 to-white ">
        Team
      </h1>

      <div className="flex justify-between w-full gap-20">
        <div className="flex flex-col text-slate-50 text-2xl justify-center items-center gap-3">
          <img
          alt=""
            src={Yaqub}
            className="lg:w-40 
            md:w-40
            md:h-40
            w-[12rem]
            h-[8rem]
            
            
            border-green-500 border-2 object-cover lg:h-40 rounded-full"
          />{" "}
          <div>
            <h1>Yaqub Naqib</h1>
            <h1 className="text-lg">Junior Engineer</h1>
            <a
           
              className="text-slate-50 hover:text-green-500 transition-all duration-50"
              target={"_blank"}
              href="https://github.com/Yaqub-naqeb"
            >
              <AiOutlineGithub></AiOutlineGithub>
            </a>
          </div>
        </div>
        <div className="flex text-slate-50 text-2xl flex-col object-cover justify-center items-center gap-3">
          <img
            src={Abdulbari}
            className="
            lg:w-40
            lg:h-40
            md:w-40
            md:h-40
            w-[12rem]
            h-[8rem] border-green-500 border-2 object-cover h-40 rounded-full
            "
          />{" "}
          <div>
            <h1>Abdulbari Qaisar</h1>
            <h1 className="text-lg">Junior Engineer</h1>
            <a
              className="text-slate-50 hover:text-green-500 transition-all duration-50"
              href="https://github.com/Abdulbariii"
            >
              <AiOutlineGithub></AiOutlineGithub>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
