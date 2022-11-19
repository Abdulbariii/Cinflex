import React from 'react'
import useTheme from '../../hook/useTheme';
import Episode from './Episode';

const Seasons = ({dataSeries}) => {






    const { maxSeason,season,currentSeason,cseason } = useTheme();


    console.log(cseason);

    // finding max num
    const diff=(num)=>{
      if (num>season){maxSeason(num)}
    }

    var nums=[];
    //collection num from 1 to number of season
    const one=()=>{
      for(let i=season;i>0;i--){
        nums.push(i)
      }
    }


  return (
    <div className='m-5 flex flex-col bg-[#30a46e69] p-5 shadow-lg '>
       
      <select className='  w-[8rem] ' name="seasons" id="" onChange={(e)=>currentSeason(e.target.value)}>
        
        seasons
      {dataSeries.episodes.map(num=>(diff(num.season)))}
      {one(season)}
      {nums&&nums.reverse().map(n=>(<option value={n} key={n} >Season {n}</option>))}
    </select>


{/* number of epidsodes */}

<div className=''>
    <Episode dataSeries={dataSeries}/>
</div>


    </div>
  )
}

export default Seasons