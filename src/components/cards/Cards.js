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
  console.log(data && data);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 8;
  const pagesVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(24 / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="flex flex-col relative mt-2 justify-between items-start h-full w-full ">
      {isPending && (
        <ThreeCircles
          height="100"
          width="100"
          color="#fff"
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
        <div className="mb-6">
          <MovieCard
            movies={data}
            pagesVisited={pagesVisited}
            userPerPage={userPerPage}
          ></MovieCard>
        </div>
      )}

      {/* creating pagnation */}
      {!isPending && (
        <div className="">
          <NewPagnation pageCount={pageCount} changePage={changePage} />
        </div>
      )}
    </div>
  );
}
