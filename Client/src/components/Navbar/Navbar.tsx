import { motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../ColorsContext';
import { LoggedIn, setLoggedIn, TrueOrFalse, UserInterface } from '../../types';
import {AiOutlinePlus} from 'react-icons/ai';
import './Navbar.css'

const Navbar = () => {
  
  const {LoggedIn} = useContext(Context) as LoggedIn
  const {setLoggedIn} = useContext(Context) as setLoggedIn
  const {User} = useContext(Context) as UserInterface
  const {TrueOrFalse} = useContext(Context) as TrueOrFalse
  const navigate = useNavigate();

  const SignOut = () => {
    localStorage.setItem('loggedin', 'false')
    setLoggedIn(TrueOrFalse());
    navigate('/home')
  }

  return (
    <motion.div className="navbarContainer" initial={{y: -70}} animate={{y:0}}>
      <div className="navbarLogo">
        <h1><Link to="/home">ColorManager</Link></h1>
      </div>
      <div className="navbarButtons">
        {LoggedIn 
        ?
        <>
          <h1 className="Username">{User.username}</h1>
          <motion.button className="navbarAdd" initial={{opacity:0}} whileInView={{opacity: 1}} onClick={() => navigate('/create')}><AiOutlinePlus className="AddIcon"/>Add</motion.button> 
          <motion.button className="Logout" initial={{opacity:0}} whileInView={{opacity: 1}} onClick={() => SignOut()}>Log off</motion.button> 
        </>
        :
        <>
          <motion.button initial={{opacity:0}} whileInView={{opacity: 1}} id="Login"><Link to="/login">Login</Link></motion.button>
          <motion.button initial={{opacity:0}} whileInView={{opacity: 1}}  id="Signup"><Link to="/signup">Signup</Link></motion.button>
        </>
        }
      </div>
    </motion.div>
  )
}

export default Navbar