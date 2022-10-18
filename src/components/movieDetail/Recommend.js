import React from "react";
import { useFetch } from "../../hook/useFetch";
export default function Recommend({ genres }) {
  let url = `https://movies-app1.p.rapidapi.com/api/movies?query=${""}&
    page=1&limit=4&year=${""}&genres=${genres}`;

  const { data, isPending, error } = useFetch(url);
  console.log(data && data);

  return (
    <div className="flex flex-col">
      <div className="text-5xl text-white font-semibold ">You May Like</div>
      <div className="w-full py-20 flex gap-10">
        {data &&
          data.results &&
          data.results.map((e) => (
            <div className="flex flex-col items-start justify-start gap-3">
              <img
                className="h-96 w-60 object-cover "
                src={
                  e.image
                    ? e.image
                    : "https://delpireandco.com/wp-content/uploads/2021/08/erwitt-found-not-lost-1-scaled.jpg"
                }
              ></img>

              <h1 className="text-xl text-white font-bold ">
                {e && e.titleOriginal}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
}
