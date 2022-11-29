import React from 'react'
import { useState } from 'react';
import { useFetch } from '../../hook/useFetch';
import useTheme from '../../hook/useTheme';

const Watch_series = () => {
    const { id } = useTheme();

  
    const url=`https://movies-app1.p.rapidapi.com/api/episode/${id}`;
    
    const {data,error}=useFetch(url);
    console.log(data);



    const servers = [
        {
          nameServer: "Server 1",
          value: 8,
        },
        {
          nameServer: "Server 2",
          value: 3,
        },
        {
          nameServer: "Server 3",
          value: 4,
        },
        {
          nameServer: "Server 4",
          value: 1,
        },
        {
          nameServer: "Server 5",
          value: 6,
        },
        {
          nameServer: "Server 7",
          value: 7,
        },
        {
          nameServer: "Server 8",
          value: 2,
        },
      ];
    
      const [serverUrl, setServerUrl] = useState(8);



  return (
    <div>
        
    </div>
 )
}

export default Watch_series
