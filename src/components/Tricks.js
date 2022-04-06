import React from 'react'
import Card from './Card'
import './Tricks.css'

const Tricks = ({tricks}) => {
  const trickCards = tricks.map(trick => {
    return (
      <Card 
        stance={trick.stance}
        name={trick.name}
        obstactle={trick.obstactle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    )
  })
  return (
    <div className='tricks'>
      {trickCards}
    </div>
  )
}


export default Tricks