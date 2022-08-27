import React, { useState } from "react";
import { useFetch } from "../../hook/useFetch";
import MovieCard from "./MovieCard";
import useTheme from "../../hook/useTheme";
import NewPagnation from "../pagnation/NewPagnation";

export default function Cards() {

  const {year,gener,title}=useTheme();
  console.log(gener);


//linki 3am
  let url= `https://movies-app1.p.rapidapi.com/api/movies?query=${title}&
  page=4&limit=23&year=${year}&genres=${gener}`;

  
  
  const { data, isPending, error } = useFetch(url);
  const [pageNumber,setPageNumber]=useState(0);
  const userPerPage=8;
  const pagesVisited=pageNumber*userPerPage;



const pageCount=Math.ceil(24 / userPerPage);
const changePage=({selected})=>{
setPageNumber(selected);
}
  return (
    <div className="">
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <MovieCard movies={data} pagesVisited={pagesVisited} userPerPage={userPerPage}></MovieCard>} 
     
{/* creating pagnation */}
<NewPagnation  pageCount={pageCount} changePage={changePage}/>

    </div>
  );
}
