import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "0e1aa90e06mshe6e538a59c86545p1acc12jsnde0b1704f0de",
  //     "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  //   },
  // };
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bebf8be787mshb2b4237a28f4e93p1ea88fjsn121587fcbbd8',
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
// skdfjal