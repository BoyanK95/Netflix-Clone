import React from 'react'
import Overlay from './Overlay'

const ImgHeader = (props) => {
  return (
      <div className='w-full h-full'>
        <Overlay />
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}`} alt={props.movie?.title} />
      </div>
  )
}

export default ImgHeader
