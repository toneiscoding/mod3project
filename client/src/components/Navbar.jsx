import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className ="">
        <div><h3>Blog App</h3></div>
        <div>
            <a href="">Home</a>
            <a href="">Create</a>
            <a href="">Contact</a>
        </div>
        <div><h5>Register/Login</h5></div>
        
    </div>
  )
}

export default Navbar