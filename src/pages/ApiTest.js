import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const ApiTest = () => {

    const [text,setText]=useState('');
    const [data,setData]=useState([''])
    console.log(data);
console.log(text);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'be66b1df87mshe46c33b7d7b5e2ap18ae02jsn7132fb194ac1',
            'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
        }
    };
    useEffect(()=>{
        fetch(`https://movies-app1.p.rapidapi.com/api/movies?sort+=Mickey`, options)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));


    },[])
   
  return (
    <div>
      <input type="text" name="" id=""  onChange={(e)=>{setText(e.target.value)}}/>
   {
    data&&data.map(m=>{
        return(<div>
            <img src={m.image} alt="" />
        </div>)
    })
   }
    </div>
  )
}

export default ApiTest
