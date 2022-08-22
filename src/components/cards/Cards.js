import React from "react";
import { useEffect } from "react";
import { useFetch } from "../../hook/useFetch";
import MovieCard from "./MovieCard";

export default function Cards(movieGeneree,movieTitle) {
  // console.log(movieGeneree.movieGeneree[0].toLowerCase());
  let url= `https://movies-app1.p.rapidapi.com/api/movies?page=2&limit=24&sort=title&year=2020&genres+=${movieGeneree.movieGeneree} `
    ;
  const { data, isPending, error } = useFetch(
   url
  );

useEffect(()=>{
url=`https://movies-app1.p.rapidapi.com/api/movies?page=2&limit=15&sort=title&year=2020&genres+=${movieGeneree.movieGeneree}`;
},[movieGeneree])


  console.log(movieTitle);

  

  console.log(data);
  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <MovieCard movies={data}></MovieCard>}
    </div>
  );
}
