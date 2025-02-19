import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setText] = useState('')
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Card title="CARD 1:" name={name} setText={setText} handleChange={handleChange}/>
      <p className='para'>{name}</p>
      <Card title="CARD 2:" name={name} setText={setText} handleChange={handleChange}/>
    </>
  )
}

export default App
