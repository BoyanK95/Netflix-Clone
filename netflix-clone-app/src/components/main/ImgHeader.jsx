import React from 'react'

const ImgHeader = (props) => {
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}`} alt={props.movie?.title} />
      </div>
    </div>
  )
}

export default ImgHeader
