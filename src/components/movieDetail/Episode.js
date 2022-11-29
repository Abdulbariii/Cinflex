import React from 'react'
import useTheme from '../../hook/useTheme';

const Episode = ({dataSeries}) => {

//current season
    const { cseason,epsode_id } = useTheme();
//to sort episodes
var eps=[];
    //2.return epsode's current season

    const getEpisode=(ep)=>{
        if(ep.season==cseason){
          return ep.episode
         }else{return null}
    
    }
   



  return (
    <div
    
    
    className='
    my-8
    grid md:gap-x-10 gap-x-4 lg:gap-x-10 font-Main lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-y-12 '>
        {/* 1.gives one episode to the function */}
         {dataSeries.episodes.map(ep=>(
          
            getEpisode(ep)&&(<p
              onClick={()=>{epsode_id(ep._id)}}
              
              className=' 
            text-sm
            text-[#ffff] 
            hover:text-green-500
            hover:cursor-pointer'>Episode: <span>{eps.push(getEpisode(ep))}</span>  </p>)


         )) }
    </div>
  )
}

export default Episode
