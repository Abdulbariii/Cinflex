import React from "react";
import { useFetch } from "../../hook/useFetch";
import useTheme from "../../hook/useTheme";
import Seasons from "./Seasons";
import Watch_series from "./Watch_series";



export default function PlaySeries({dataSeries}) {
  const {id} = useTheme();

  const urll=`https://movies-app1.p.rapidapi.com/api/episode/${id}`;
    
  const {data,error}=useFetch(urll);

  return (
    <div className="">
      <h1 className="text-5xl text-white font-Main">Play Series</h1>
      
      {/* number of seasons */}
      
      <Seasons  dataSeries={dataSeries} data={data} />



      <Watch_series data={data}/>
 
    </div>
  );
}
