import React, { useContext, useEffect } from 'react';
import './Browse.css'
import { Context } from '../../ColorsContext';
import { Color, Colors, getAllColors, setLoggedIn, setUser, TrueOrFalse } from '../../types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
    const {getAllColors} = useContext(Context) as getAllColors
    const {Colors} = useContext(Context) as Colors
    const {setLoggedIn} = useContext(Context) as setLoggedIn
    const {TrueOrFalse} = useContext(Context) as TrueOrFalse
    const {setUser} = useContext(Context) as setUser

    const navigate = useNavigate();

    useEffect(() => {
      getAllColors();
      setLoggedIn(TrueOrFalse())
      setUser(JSON.parse(localStorage.getItem('user')!))
    }, [])
    

  return (
    <div className="browseContainer">
      <div className="content">
        {Colors.map((color) => (
          <motion.div className="colorsWrapper" onClick={() => navigate(`./${color.id}`)} key={color.id} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: .05*color.id!}}>
            <h1>{color.creator}</h1>
            <div className="colorsContainer" key={color.id} style={{background:color.color1}}>
                <div className="colorCircle" style={{background:color.color2}}></div>
                <h1 style={{color: color.color3}}>ColorManager</h1>
            </div>
          </motion.div>
        ))}
        </div>
    </div>
  )
}

export default Browse