import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-[44rem] bg-indigo-100 flex flex-col items-start justify-center">
      <Title></Title>
    </div>
  );
}
