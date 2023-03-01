import { motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../ColorsContext';
import { getAllColors, getRandomColors, RandomColors } from '../../types';
import { useNavigate } from 'react-router-dom';
import './Loading.css'

const Loading = () => {

    const navigate = useNavigate();
    const {getAllColors} = useContext(Context) as getAllColors


    useEffect(() => {
        setTimeout(() => {
            getAllColors()
        }, 1000);
        setTimeout(() => {
            navigate('./home')
        }, 2000);
    }, [])
    

  return (
    <div className="loadingContainer">
        <motion.section>
            <motion.h1 initial={{y: -100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 2}}>Y</motion.h1>
        </motion.section>
        <motion.section>
            <motion.h1 initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 2}}>M</motion.h1>
        </motion.section>
    </div>
  )
}

export default Loading