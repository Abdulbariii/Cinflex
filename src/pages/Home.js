import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import ShowBox from "../components/ShowBox";
import { useFetch } from "../hook/useFetch";

export default function Home() {
  const { data, isPending, error } = useFetch(
    "https://movies-app1.p.rapidapi.com/api/movies?limit=3"
  );

  console.log(data);
  return (
    <div className=" flex  lg:flex-nowrap flex-wrap items-center h-fit  justify-center">
      <Title></Title>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      {data && <ShowBox movies={data}></ShowBox>}
    </div>
  );
}
