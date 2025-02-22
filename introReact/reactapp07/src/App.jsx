
import './App.css'

function App() {
  function handleClick(){
    console.log("Hello how are you!")
  }
  function handleButton(e){
    e.stopPropagation()    //the stop propation stops the bubble of propgation of the onClick  
    alert("Welcome to the world of albatross")
  }
  function handleSubmit(){
    alert("The Form was submited to the flock, You are now a member of albatross confederation")
  }
  function handleChanges(e){
    e.preventDefault()
    console.log(`Your name is:`,e.target.value);
    
  }
    return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChanges}/>
        <button type='submit'>SUBMIT</button>
      </form>
      {/* <div onClick={handleClick} className='divi'>
        GENERAL ALBATROSS
        <button onClick={handleButton}>
          CLICK HERE
        </button>
      </div> */}
    </>
  )
}

export default App
