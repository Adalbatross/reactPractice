import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const Child3 = () => {
    function handleClick(){
        if(theme === "light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }
    const {theme, setTheme}= useContext(ThemeContext)
  return (
    <>
        <button onClick={handleClick}>
          Change Theme
        </button>
    </>
  )
}

export default Child3
