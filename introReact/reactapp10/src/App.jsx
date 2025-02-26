
import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Home />
      </div>
    },
    {
      path:"/dashboard",
      element:<div>
      <Navbar/>
      <Dashboard />
    </div>
    },
    {
      path:"/about",
      element:<div>
      <Navbar/>
      <About />
    </div>
    }
  ]
)
function App() {
  
  return (
    <>
    <RouterProvider router={router}/>

    </>
  )
}

export default App
