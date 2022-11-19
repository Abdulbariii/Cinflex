import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import MovieInfo from "../components/movieDetail/MovieInfo";

export default function MovieDetail() {
  const { id } = useParams();
  const url = `https://movies-app1.p.rapidapi.com/api/movie/${id}`;
  const { data } = useFetch(url);
  return (
    <div className="  py-5  min-h-screen w-full">
      {data && <MovieInfo data={data}></MovieInfo>}
    </div>
  );
}
