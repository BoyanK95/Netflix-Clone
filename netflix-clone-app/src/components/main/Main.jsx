import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../../request/Requests'

const Main = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(requests.requestPopular).then((responce) => {
            setMovies(responce.data)
        })
    }, [])
    console.log(movies);

  return (
    <div>
      
    </div>
  )
}

export default Main
