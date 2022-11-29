import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);


  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '2506f97b25msh51cdafe170baf79p10e04fjsndfc97222bc19',
  //     'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
  //   }
  // };
  // abo1 

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5061c3d207msh9860747a9d6fbeap1329b5jsndef82b1d367b',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    }
  };
  


  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, options);

        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("Could not fetch the data");
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};
