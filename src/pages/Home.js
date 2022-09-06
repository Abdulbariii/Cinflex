import React from "react";
import Title from "../components/Title";
import { useFetch } from "../hook/useFetch";

export default function Home() {
  return (
    <div className="flex  flex-col  justify-center min-h-screen w-full">
      <Title></Title>
    </div>
  );
}
