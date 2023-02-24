import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLogo">
        <h1>ColorManager</h1>
      </div>
      <div className="navbarButtons">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  )
}

export default Navbar