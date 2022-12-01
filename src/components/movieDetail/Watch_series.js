import React from 'react'
import { useState } from 'react';
import { useFetch } from '../../hook/useFetch';
import useTheme from '../../hook/useTheme';

const Watch_series = () => {
    const { id } = useTheme();

  
    const url=`https://movies-app1.p.rapidapi.com/api/episode/${id}`;
    
    const {data,error}=useFetch(url);
    // console.log(data&&data.result.embedUrls[0]);
console.log(data);



// data&&data.result&&data.result.embedUrls[2]&&data.result.embedUrls[2].url

  return (
    <div>

<iframe
     // src={}
          // className="h-[31rem] rounded-md lg:w-[55rem] md:w-[55rem] w-full "
          // title="Iframe Example"
        ></iframe>


        {
// data&&data.result&&data.result.embedUrls&&data.result.embedUrls.map((urll,index)=><p className='text-white'>{urll.url} { index+1}</p>
// )
        }

    </div>
 )
}

export default Watch_series
