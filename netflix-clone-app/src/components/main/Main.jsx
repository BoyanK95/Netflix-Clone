import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../request/Requests";
import ImgHeader from "./ImgHeader";
import LeftMovieHeader from "./LeftMovieHeader";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((responce) => {
      setMovies(responce.data.results);
    });
  }, []);

  return (
    <div className="w-full h-[550px] text-white">
      <ImgHeader movie={movie} />
      <LeftMovieHeader movie={movie} />
    </div>
  );
};

export default Main;
