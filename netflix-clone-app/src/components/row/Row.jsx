import axios from "axios";
import React, { useEffect, useState } from "react";
import NoMoviesFound from "../NotFound/NoMoviesFound";
import RowItem from "./RowItem";


const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    axios.get(fetchURL).then((responce) => {
      setMovies(responce.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {!movies ? <NoMoviesFound /> : movies.map((item, id) => (
            <RowItem key={id} movie={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
