import React from 'react'
import { truncateString } from '../helper/truncateString'

const LeftMovieHeader = (props) => {
  return (
    <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className='text-3xl md:text5xl font-bold'>{props.movie?.title}</h1>
        <div className='my-4'>
          <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
            Play
          </button>
          <button className="border text-white border-gray-300 py-2 px-5 ml-4">
            Watch Later
          </button>
        </div>
        <p className='text-gray-400 text-sm'>Realesed: {props.movie?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(props.movie?.overview, 150)}</p>
      </div>
  )
}

export default LeftMovieHeader
