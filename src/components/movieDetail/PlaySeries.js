import React from "react";
import Seasons from "./Seasons";



export default function PlaySeries({dataSeries}) {

  return (
    <div className="">
      <h1 className="text-5xl text-white font-Main">Play Serie</h1>
      
      {/* number of seasons */}
      
      <Seasons  dataSeries={dataSeries} />
 
    </div>
  );
}
