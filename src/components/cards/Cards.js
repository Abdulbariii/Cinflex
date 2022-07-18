import React from "react";
import { useFetch } from "../../hook/useFetch";
import MovieCard from "./MovieCard";

export default function Cards() {
  const { data, isPending, error } = useFetch(
    "https://movies-app1.p.rapidapi.com/api/movies?limit=10"
  );

  console.log(data);
  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <MovieCard movies={data}></MovieCard>}
    </div>
  );
}
