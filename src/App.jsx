import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

const App = () => {
  return (
    <div>
      {/* <Browserrouter> */}
    
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/>
          
    </Routes>
    {/* </Browserrouter> */}
      
    </div>
  )
}

export default App
