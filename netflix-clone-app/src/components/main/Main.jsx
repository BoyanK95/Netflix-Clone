import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../../request/Requests'
import ImgHeader from './ImgHeader'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((responce) => {
            setMovies(responce.data.results)
        })
    }, [])

  return (
    <ImgHeader movie={movie}/>
  )
}

export default Main
