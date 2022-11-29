import React from "react";
import Seasons from "./Seasons";
import Watch_series from "./Watch_series";



export default function PlaySeries({dataSeries}) {


  return (
    <div className="">
      <h1 className="text-5xl text-white font-Main">Play Series</h1>
      
      {/* number of seasons */}
      
      <Seasons  dataSeries={dataSeries} />



      <Watch_series/>
 
    </div>
  );
}
