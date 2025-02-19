import React from 'react'

function Logout({ setLoggedIn }) {
  return (
    <div>
      <button onClick={() => setLoggedIn(false)}>Logout</button>
    </div>
  )
}

export default Logout
