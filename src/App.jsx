
import './App.css'
import About from './components/About'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Footer from './shared/Footer'
import Ide from './components/ide/Ide'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  const first=<>
  <Navbar/>
  <Home/>
  <Features/>
  <About/>
  <Newsletter/>
  <Footer/>
  </>
  
  const router = createBrowserRouter([
    {
      path:'/', 
      element:<Navbar/>,
      children:[
        {index:true , 
        element:<>
        <Navbar/>
        <Home/>
        <Features/>
        <About/>
        <Newsletter/>
        <Footer/>
        </>},
        {
          path:'about',
          element:first
        },
        {
          path:'home',
          element:first
        },
        {
          path:'feature',
          element:first
        },
        {
          path:'/onlineIde',
          element:<Ide/>
          
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
