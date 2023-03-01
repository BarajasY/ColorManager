import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <motion.div className="navbarContainer" initial={{y: -70}} animate={{y:0}}>
      <div className="navbarLogo">
        <h1><Link to="/home">ColorManager</Link></h1>
      </div>
      <div className="navbarButtons">
        <button><Link to="./login">Login</Link></button>
        <button id="Signup"><Link to="/signup">Signup</Link></button>
      </div>
    </motion.div>
  )
}

export default Navbar