import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  CreatePage from './pages/CreatePage'
import axios  from 'axios'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 
  

  return (
    <>
      {/* 
      
      homepage
      create page



      */}
    <BrowserRouter>
      <Routes>

      </Routes>
    </BrowserRouter>  
    <Navbar/> 
    <CreatePage/>
    </>
  )
}

export default App
