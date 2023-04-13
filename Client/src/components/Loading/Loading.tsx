import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css'

const Loading = () => {

    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            navigate('./home')
        }, 2000);
    }, [])
    

  return (
    <div className="loadingContainer">
        <motion.section>
            <motion.h1 
            initial={{y: -100, opacity: 0}} 
            whileInView={{y: 0, opacity: 1}} 
            transition={{duration: 2}} style={{color: 'var(--suplementarycolor)'}}>C</motion.h1>
        </motion.section>
        <motion.section>
            <motion.h1 initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 2}} style={{color: 'var(--colorb12)'}}>M</motion.h1>
        </motion.section>
    </div>
  )
}

export default Loading