import React from 'react'
import './Card.css'

const Card = ({stance, name, obstacle, tutorial, id}) => {
  return (
    <div className='card'>
      <p>{stance}</p>
      <p>{name}</p>
      <p>{obstacle}</p>
      <p>{tutorial}</p>

    </div>
  )
}

export default Card