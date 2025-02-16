import React from 'react'
import './Counter.css'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div className='counter'>
      <p> You have clicked it {count} times </p>
      <button className='button' onClick={()=> {
        setCount(count+1)
      }}>Click me</button>
      <button className='unclick'onClick={()=>{
        if(count>0){
            setCount(count-1)
        }
      }}>Unclick me</button>
    </div>
  )
}

export default Counter
