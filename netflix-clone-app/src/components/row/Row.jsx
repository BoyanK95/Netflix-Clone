import axios from "axios";
import React, { useEffect, useState } from "react";
import RowItem from "./RowItem";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((responce) => {
      setMovies(responce.data.results);
    });
  }, [fetchUrl]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div>
          
        </div>
      </div>
    </>
  );
};

export default Row;
