import React, { useContext, useEffect } from 'react';
import { Context } from '../../ColorsContext';
import { Color, getAllColors } from '../../types';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import './Main.css';

const Main = () => {
  const {getAllColors} = useContext(Context) as getAllColors
  //Basically making home page reset-safe, so it doesn't crash on reload due to React Context stuff.
  const UnparsedRColors = sessionStorage.getItem("random")
  const RandomColors: Color = JSON.parse(UnparsedRColors!);

  useEffect(() => {
    getAllColors()
}, [])
  
  return (
    <div className="mainContainer">
        <div className="firstColumn">
            <motion.h1 animate={{opacity: 1, x:0}} initial={{opacity: 0, x:-30}}>Color Manager</motion.h1>
            <motion.p animate={{opacity: 1, x:0}} initial={{opacity: 0, x:30}}>Browse our pallettes designed to bring you the best styles there are.</motion.p>
        </div>
        <div className="secondColumn">
            <motion.button animate={{opacity: 1, y:0}} initial={{opacity: 0, y:-30}}><Link to='./browse'>Start</Link></motion.button>
        </div>
{/*         <div className="mainShade"></div> */}
        <div className="randomColoredSquares">
          <motion.div className="square" initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: .5}} style={{background: RandomColors.color1}}></motion.div>
          <motion.div className="square" initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 1}} style={{background: RandomColors.color2}}></motion.div>
          <motion.div className="square" initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 1.5}} style={{background: RandomColors.color3}}></motion.div>
        </div>
    </div>
  )
}

export default Main