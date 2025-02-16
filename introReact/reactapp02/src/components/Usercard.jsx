import React from 'react'
import './Usercard.css'
function Usercard({message,imgSrc}) {
  return (
    <div className='card'>
      {message}
      <img className = 'image' src={imgSrc} alt='User is not here'></img>
    </div>
  )
}

export default Usercard
