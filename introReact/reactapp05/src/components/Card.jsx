import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
        {props.title}
      <input className='enter' value={props.name} onChange={props.handleChange}/>
    </div>
  )
}

export default Card
