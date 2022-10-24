import React from "react";
import Title from "../components/title/Title";
import Explore from "../components/btn/Explore";
export default function Home() {
  return (
    <div className="flex flex-col justify-start gap-28  items-start py-5  min-h-screen w-full">
      <Title></Title>
      <Explore></Explore>
    </div>
  );
}
