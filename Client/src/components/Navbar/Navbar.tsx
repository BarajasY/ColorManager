import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../ColorsContext';
import { LoggedIn, setLoggedIn } from '../../types';
import './Navbar.css'

const Navbar = () => {
  
  const {LoggedIn} = useContext(Context) as LoggedIn
  const {setLoggedIn} = useContext(Context) as setLoggedIn

  const SignOut = () => {
    setLoggedIn(false);
  }

  return (
    <motion.div className="navbarContainer" initial={{y: -70}} animate={{y:0}}>
      <div className="navbarLogo">
        <h1><Link to="/home">ColorManager</Link></h1>
      </div>
      <div className="navbarButtons">
        {LoggedIn 
        ?
          <button onClick={() => SignOut()}>Log off</button> 
        :
        <>
          <button><Link to="/login">Login</Link></button>
          <button id="Signup"><Link to="/signup">Signup</Link></button>
        </>
        }
      </div>
    </motion.div>
  )
}

export default Navbar