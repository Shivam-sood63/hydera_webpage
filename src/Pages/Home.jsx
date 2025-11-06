import React from 'react'
import Navbar from '../Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Banner from '../Components/Banner'
import Payus from '../Components/Payus'
import Intro from '../Components/Intro'
import AboutHydra from '../Components/AboutHydra'
import Why from '../Components/Why'
import Sim from '../Components/Sim'
import Tech from '../Components/Tech'
import Unreal from '../Components/Unreal'
import How from '../Components/How'
import Conseption from '../Components/Conseption'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>

     <Navbar/>
     <Banner/>
     <Payus/>
     <Intro/>
     <AboutHydra/>
     <Why/>
     <Sim/>
     <Tech/>
     <Unreal/>
     <How/>
     <Conseption/>
     <Footer/>
      
    </div>
  )
}

export default Home
