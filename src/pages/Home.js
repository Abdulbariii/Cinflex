import React from "react";
import Title from "../components/title/Title";
import { useFetch } from "../hook/useFetch";

export default function Home() {
  return (
    <div className="flex items-start md:px-40 py-5 justify-center min-h-screen w-full">
      <Title></Title>
    </div>
  );
}
