import React from 'react'

const RowItem = (props) => {
  return (
    <div className='"w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"'>
      <img src={props.img} alt={props.alt}></img>
    </div>
  )
}

export default RowItem
