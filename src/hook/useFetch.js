import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://movies-app1.p.rapidapi.com/api/genres',
    headers: {
      'X-RapidAPI-Key': '47fda72920mshd955c1cc7203dc6p13b76ejsn79a730c64569',
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
