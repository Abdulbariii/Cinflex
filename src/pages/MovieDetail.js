import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { Outlet } from "react-router-dom";
import useTheme from "../hook/useTheme";

export default function MovieDetail() {
  const {id}=useParams();
  const url=`https://movies-app1.p.rapidapi.com/api/movie/${id}`;
  const { data, isPending, error }= useFetch(url);
  const {  color } = useTheme();



  return (<div className=" overflow-hidden">
{
  data&&
               <div className=" lg:mt-[4rem] md:mt[3rem] sm:mt[3rem] flex lg:ml-[20%]   gap-[3rem] 
               text-white
sm: flex-col
lg:flex-row 
               ">
             <div><img
             className="h-fit -z-50 max-w-none  "
             src={data.result.image} alt="" /></div>   
                <div className="self-center ">
{/* btn */}
<button className={`${color} p-3 text-center`}

>Watch now</button>


                  <h1 className="bold text-3xl ">{data.result.title} </h1>

<div className="flex gap-5 my-2 ">
  <Link to={'trailar'}> 
  <p className={`border  p-2  ${color}`} >Trailer</p>
  
  </Link>
 
  <p className="border p-2 shadow-lg bg-slate-50  text-black">HD</p>

</div>

<p>Release: {data.result.release}</p>
<p>Genere: {data.result.genres[0].name}</p>
<p>Rank: {data.result.rating}</p>
<p className="text-lg  ">discription:</p>
                  <p className="lg:pr-[24rem] text-justify "> {data.result.description}</p>

                </div>

              
               </div>

}
<Outlet/>
  
   </div>);
}
