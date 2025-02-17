import React from 'react'
import './Counter.css'

function Counter(props) {
  return (
    <div className='counter'>
      <p>You have clicked {props.children} times</p>
      <button className='button' onClick={props.handleCount}>Click Here</button>
      <button className='reset' onClick={props.handleReseter}>Reset</button>
    </div>
  )
}

export default Counter
