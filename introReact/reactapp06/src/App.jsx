import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      {loggedIn ? <Logout setLoggedIn={setLoggedIn}/> : <Login setLoggedIn={setLoggedIn}/>}
    </>
  )
}

export default App
