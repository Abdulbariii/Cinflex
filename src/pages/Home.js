import React from "react";
import Title from "../components/title/Title";
import Explore from "../components/btn/Explore";
import NewestMovie from "../components/promotion/NewestMovie";
export default function Home() {
  return (
    <div className="flex flex-col relative justify-start gap-28  items-start py-5  min-h-screen w-full
    ">
      <Title></Title>
      <Explore></Explore>

      <div className="lg:absolute right-0 bottom-5">
        <NewestMovie></NewestMovie>
      </div>
    </div>
  );
}
