import React, { useState } from "react";
import Search from "../components/SearchBar.js/Search";
import Cards from "../components/cards/Cards";

export default function Movies() {
  const [movieGeneree,setMovieGeneree]=useState(['Animación']);

  const [movieTitle,setMovieTitle]=useState('');
console.log(movieTitle);
  
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Search movieGeneree={movieGeneree} setMovieGeneree={setMovieGeneree}
      setMovieTitle={setMovieTitle}
      />
      <Cards movieGeneree={movieGeneree} setMovieTitle={setMovieTitle} movieTitle={movieTitle}></Cards>
    </div>
  );
}
