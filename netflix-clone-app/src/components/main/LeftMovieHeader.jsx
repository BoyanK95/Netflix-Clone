import React from 'react'

const LeftMovieHeader = (props) => {
  return (
    <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1>{props.movie?.title}</h1>
        <div>
          <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
            Play
          </button>
          <button className="border text-white border-gray-300 py-2 px-5 ml-4">
            Watch Later
          </button>
        </div>
      </div>
  )
}

export default LeftMovieHeader
