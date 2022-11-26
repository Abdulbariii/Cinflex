import React from 'react'
import useTheme from '../../hook/useTheme';
import Episode from './Episode';

const Seasons = ({dataSeries}) => {

    const {maxSeason,season,currentSeason} = useTheme();

    // finding max num
    const find_max_season=(num)=>{
      if (num>season){maxSeason(num)}
    }

    var nums=[];
    //push number form max season to 1
    const one=()=>{
      for(let i=season;i>0;i--){
        nums.push(i)
      }
    }


  return (
    <div className='lg:m-5 md:m-5 mt-5  lg:mt-0 md:mt-0
      flex flex-col bg-[#30a46e69] lg:items-start md:items-start items-center
        md:p-5 lg:p-5 p-3 shadow-lg
       pt-5 lg:pt-0 md:pt-0 '>


       {/*number of season  */}
      <select className='  w-[8rem] mb-3' name="seasons" id="" onChange={(e)=>currentSeason(e.target.value)}>
        seasons
      {dataSeries.episodes.map(num=>(find_max_season(num.season)))}
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
