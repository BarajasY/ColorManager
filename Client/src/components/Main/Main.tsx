import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../ColorsContext';
import { Color, RandomColors, RandomColorsInterface } from '../../types';
import {useNavigate, Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import './Main.css';

const Main = () => {
  //Basically making home page reset-safe, so it doesn't crash on reload due to React Context stuff.
  const UnparsedRColors = sessionStorage.getItem("random")
  const RandomColors: Color = JSON.parse(UnparsedRColors!);
  
  return (
    <div className="mainContainer">
        <div className="firstColumn">
            <h1>Color Manager</h1>
            <p>Browse our pallettes designed to bring you the best styles there are.</p>
        </div>
        <div className="secondColumn">
            <button><Link to='./browse'>Start</Link></button>
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