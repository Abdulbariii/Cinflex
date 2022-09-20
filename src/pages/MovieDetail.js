import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { Outlet } from "react-router-dom";
import useTheme from "../hook/useTheme";
import { useNavigate } from "react-router-dom";
import MovieInfo from "../components/movieDetail/MovieInfo";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function MovieDetail() {
  const { id } = useParams();
  const url = `https://movies-app1.p.rapidapi.com/api/movie/${id}`;
  const { data } = useFetch(url);
  const { color } = useTheme();

  const Navigate = useNavigate();

  return (
    <div className=" md:px-40 py-5  min-h-screen w-full">
      {data && <MovieInfo data={data}></MovieInfo>}
    </div>
  );
}
