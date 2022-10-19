import React from "react";
import Title from "../components/title/Title";
import { useFetch } from "../hook/useFetch";
import Newest from "../components/promotion/Newest";
export default function Home() {
  return (
    <div className="flex flex-col justify-around  gap-28  items-center py-5  min-h-screen w-full">
      <Title></Title>

      <Newest></Newest>
    </div>
  );
}
