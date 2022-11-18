import React from 'react'
import useTheme from '../../hook/useTheme';

const Seasons = ({dataSeries}) => {
    const { maxSeason,season } = useTheme();

    const diff=(num)=>{
      if (num>season){maxSeason(num)}
    }
    var nums=[];
    
    const one=()=>{
      for(let i=season;i>0;i--){
        nums.push(i)
      }
    }
  return (
    <div>
      <select name="seasons" id="">
        seasons
      {dataSeries.episodes.map(num=>(diff(num.season)))}
      {one(season)}
      {nums&&nums.reverse().map(n=>(<option>Season {n}</option>))}
    </select>
    </div>
  )
}

export default Seasons
