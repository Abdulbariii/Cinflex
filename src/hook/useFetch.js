import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'be66b1df87mshe46c33b7d7b5e2ap18ae02jsn7132fb194ac1',
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
