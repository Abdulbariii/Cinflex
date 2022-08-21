import React from "react";
import Title from "../components/Title";
import ShowBox from "../components/ShowBox";
import { useFetch } from "../hook/useFetch";
import Slider from "../Slider";

export default function Home() {
  const { data, isPending, error } = useFetch(
    "https://movies-app1.p.rapidapi.com/api/movies?limit=3"
  );

  console.log(data);
  return (
    <div className="flex  flex-col align-middle justify-center" >
      <Title></Title>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

   <div className="lg:px-[20rem]  lg:my-[-18rem] lg:ml-[20rem]
   
   "> <Slider/></div>
    </div>
  );
}
