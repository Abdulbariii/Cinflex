import React from 'react'
import useTheme from '../../hook/useTheme';

const Episode = ({dataSeries}) => {


//current season
    const { cseason } = useTheme();

    //2.return epsode's current season
    const getEpisode=(ep)=>{
        if(ep.season==cseason){return ep.episode
        }else{return null}
    
    }


  return (
    <div className='
    my-8
    grid gap-x-10 font-Main grid-cols-6  gap-y-12 '>
        {/* 1.gives one episode to the function */}
         {dataSeries.episodes.map(ep=>(
            getEpisode(ep)&&(<p className=' 
            text-[#ffff] 
            hover:text-green-500
            hover:cursor-pointer'>Episode: {(getEpisode(ep)) }</p>)
         )) }
    </div>
  )
}

export default Episode
