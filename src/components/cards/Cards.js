import React from "react";
import { useFetch } from "../../hook/useFetch";
import MovieCard from "./MovieCard";
import useTheme from "../../hook/useTheme";

export default function Cards(movieGeneree,movieTitle) {

  const {year,gener,title}=useTheme();
  console.log(gener);


//linki 3am
  let url= `https://movies-app1.p.rapidapi.com/api/movies?query=${title}&
  page=2&limit=24&year=${year}&genres=${gener}`;
  
  const { data, isPending, error } = useFetch(url);



  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <MovieCard movies={data}></MovieCard>}
    </div>
  );
}
