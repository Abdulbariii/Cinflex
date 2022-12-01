import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useFetch } from '../../hook/useFetch';
import useTheme from '../../hook/useTheme';

const Watch_series = ({data}) => {
    const {id, seriesUrl,url} = useTheme();

    
    


  
    // const urll=`https://movies-app1.p.rapidapi.com/api/episode/${id}`;
    
    // const {data,error}=useFetch(urll);
// useEffect(()=>{data&&data.result&&data.result.embedUrls&&data.result.embedUrls[0].url&&seriesUrl(data.result.embedUrls[0].url)},id)
  



  return (
    <div>
        {

<ul className=" mt-14 md:mt-0 lg:mt-0 lg:flex-col md:flex-col  sm:flex-row justify-center flex-wrap  text-transparent items-center leading-snug font-Main  flex gap-8 text-2xl text-white    ">



{data&&data.result&&data.result.embedUrls&&data.result.embedUrls.map((server,index) => (
  <div key={index} onClick={()=>{seriesUrl(server.url)}} >
    {/* */}
    <li
      className=' text-sm cursor-pointer px-8 py-2 text-green-500 border-2  border-gray-50 bg-[#000000]'
    >

     <p>{index+1}</p>
    </li>
  
  </div>
))}

</ul>
        }



<iframe
     src={url}
          className="h-[31rem] rounded-md lg:w-[55rem] md:w-[55rem] w-full "
          title="Iframe Example"
        ></iframe>


    </div>
 )
}

export default Watch_series
