import { useState } from 'react'
import './App.css'
import Child from './components/Child'
import { createContext } from 'react'
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light")
  // const [user, setUser] = useState({name:"aditya"})

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className='container' style={{backgroundColor:theme==="light"?'beige':'black'}}>
      < Child />
      </div>
    </ThemeContext.Provider>
  )
}
export default App
export { ThemeContext }

