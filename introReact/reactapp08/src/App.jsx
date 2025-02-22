import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [second, setSecond] = useState(0)
  const [total, setTotal] = useState(0)

  function handleCount() {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("hello")
    const interval = setInterval(() => {
      setSecond(prevSecond => prevSecond + 1)
    }, 1000)

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [second]) // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <button onClick={handleCount}>
        Push me
      </button>
      <div>
        Count: {count}
      </div>
      <div>
        Seconds: {second}
      </div>
    </>
  )
}

export default App
