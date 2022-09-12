import React, { useState } from "react";
import { useFetch } from "../../hook/useFetch";
import MovieCard from "./MovieCard";
import useTheme from "../../hook/useTheme";
import NewPagnation from "../pagnation/NewPagnation";
import { ThreeCircles } from "react-loader-spinner";
export default function Cards() {
  const { year, gener, title } = useTheme();
  console.log(gener);

  //linki 3am
  let url = `https://movies-app1.p.rapidapi.com/api/movies?query=${title}&
  page=4&limit=23&year=${year}&genres=${gener}`;

  const { data, isPending, error } = useFetch(url);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(24 / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="flex flex-col relative mt-2 justify-between items-center h-full w-full ">
      {isPending && (
        <ThreeCircles
          height="100"
          width="100"
          color="#ef4444"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      )}
      {error && <h1>{error}</h1>}
      {data && (
        <div className="">
          <MovieCard
            movies={data}
            pagesVisited={pagesVisited}
            userPerPage={userPerPage}
          ></MovieCard>
        </div>
      )}

      {/* creating pagnation */}
      {!isPending && (
        <div className="absolute -bottom-20 left-2/4 translate-x-[-50%]">
          <NewPagnation pageCount={pageCount} changePage={changePage} />
        </div>
      )}
    </div>
  );
}
