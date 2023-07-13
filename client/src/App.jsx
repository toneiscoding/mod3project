import { useState } from 'react'
import './App.css'
import  CreatePage from './pages/createPage'
import axios  from 'axios'
import Navbar from './components/navbar'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 
  

  return (
    <>
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
