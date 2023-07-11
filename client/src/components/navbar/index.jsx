import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='navbar'>
      
            <Link className='link' to="/">Home</Link>
          
         
            <Link className='link' to="/about">About</Link>
          
        
            <Link className='link' to="/create">Create</Link>
          
        
      </nav>
    );
  };

export default Navbar;