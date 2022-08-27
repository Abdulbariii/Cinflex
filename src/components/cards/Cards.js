import React, { useState } from "react";
import { useFetch } from "../../hook/useFetch";
import MovieCard from "./MovieCard";
import useTheme from "../../hook/useTheme";
import { Pagination } from "@mui/material";

export default function Cards(movieGeneree,movieTitle) {

  const {year,gener,title,page}=useTheme();
  console.log(gener);


//linki 3am
  let url= `https://movies-app1.p.rapidapi.com/api/movies?query=${title}&
  page=4&limit=${page}&year=${year}&genres=${gener}`;

  
  
  const { data, isPending, error } = useFetch(url);
 if(page===12){
data.results.slice(6,11)
  }else if(page===18){
    data.results.slice(12,18);
    console.log(  data.results.slice(12,18));

  }else if(page===24){
    data.results.slice(19,23)
  }else{
    console.log('fkljgd');
  }


  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <MovieCard movies={data}></MovieCard>}



    </div>
  );
}
