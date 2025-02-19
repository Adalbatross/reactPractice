import React from 'react'

function Login({setLoggedIn}) {
  return (
      <button onClick={()=>
        setLoggedIn(true)
      }>Login</button>
  )
}

export default Login
