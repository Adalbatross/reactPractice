import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/Counter.jsx"

function App() {
  const [count,setCount] = useState(0);
  function CounterINI(){
     setCount(count + 1);
  }
  function Reseter(){
    setCount(0);
  }
  return (
    <>
      <Counter handleCount = {CounterINI} handleReseter = {Reseter}>
        <h1>{count}</h1>
      </Counter>
    </>
  )
}

export default App
