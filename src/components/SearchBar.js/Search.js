import React,{useState,useEffect} from "react";
import { useFetch } from "../../hook/useFetch";
import useTheme from "../../hook/useTheme";

export default function Search({setMovieGeneree,movieGeneree,setMovieTitle,movieTitle}) {


const XX=(e)=>{
  setMovieGeneree(e.target.value);
}

const Title=(e)=>{
  console.log(e.target.value);
 setMovieTitle(e.target.value);
}





// fun(movieGenere)
  const {mode} = useTheme();
  const url = `https://movies-app1.p.rapidapi.com/api/genres`;
  const { data, isPending, error } = useFetch(url);
  const [years, setYears] = useState();

  // create link
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'be66b1df87mshe46c33b7d7b5e2ap18ae02jsn7132fb194ac1',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    }
  };
  useEffect(() => {
    fetch("https://movies-app1.p.rapidapi.com/api/years", options)
      .then((response) => response.json())
      .then((response) => setYears(response))
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className="flex items-center">
      <form className="flex gap-2 p-2 items-center justify-around ">
        <div>
          <label className="flex flex-col gap-2 ">
            <span
              className={`${
                mode === "bg-gray-50" ? " text-gray-900" : " text-gray-50"
              }`}
            >
              Search
            </span>
            {/* input */}

            <input
            value={movieTitle}
            onChange={Title}
              placeholder="Search"
              className={`w-72 h-8 shadow shadow-lg  shadow-[#0000003a]  text-black p-1 rounded-sm ${
                mode === "bg-gray-50" ? "bg-gray-50" : "bg-gray-900"
              }`}
            ></input>
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2 ">
            <span
              className={`${
                mode === "bg-gray-50" ? " text-gray-900" : " text-gray-50"
              }`}
            >
              Geners
            </span>
            <select


value={movieGeneree} onChange={XX}

              className={`h-8 p-1 flex justify-center items-center rounded-sm shadow shadow-lg  shadow-[#0000003a]  text-black p-1 rounded-sm ${
                mode === "bg-gray-50"
                  ? "bg-gray-50 text-gray-900"
                  : "bg-gray-900 text-gray-50"
              }`}
            >
              {data &&
                data.results.map((genere) => {
                  return (<option  value={genere.name} > {genere.name}</option>)
                  ;
                })}
            </select>
          </label>
        </div>

        <div>
          <label className="flex flex-col gap-2 ">
            <span
              className={`${
                mode === "bg-gray-50" ? " text-gray-900" : " text-gray-50"
              }`}
            >
              Year
            </span>
            <select
              className={`h-8 p-1 flex justify-center items-center rounded-sm shadow shadow-lg  shadow-[#0000003a]  text-black p-1 rounded-sm ${
                mode === "bg-gray-50"
                  ? "bg-gray-50 text-gray-900"
                  : "bg-gray-900 text-gray-50"
              }`}
            >
              {years &&
              
              
              years.results.map((year) => <option>{year.name}</option>)
                
                }
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}
