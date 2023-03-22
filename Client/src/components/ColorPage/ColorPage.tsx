import React, {useEffect, useContext, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../ColorsContext';
import { ColorById, getColorById, getColorsByCreator, ColorsByCreator } from '../../types';
import { motion } from 'framer-motion';
import './ColorPage.css';

const ColorPage = () => {
  const [Loading, setLoading] = useState(false)

  const {ColorById} = useContext(Context) as ColorById
  const {getColorById} = useContext(Context) as getColorById
  const {getColorsByCreator} = useContext(Context) as getColorsByCreator 
  const {ColorsByCreator} = useContext(Context) as ColorsByCreator

  const PageId = useParams()
  const navigate = useNavigate()
  const ToNumber = Number(PageId.id)
  
    useEffect(() => {
        getColorById(ToNumber - 1);
        getColorsByCreator()
        setLoading(true)
    }, [])

    const NavigateToSuggestedColor = (id: number):void => {
      navigate(`../home/${id}`)
      window.location.reload()
    }

    if(!Loading) {
      return (
        <h1>Loading</h1>
      )
    } else {

      
      return (
        <div className="colorPageContainer">
          <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}}>Creator: <span>{ColorById.creator}</span></motion.h1>
          <div className="colorPageContent">
            <motion.div className="colorInformation" 
              style={{background:ColorById.color1, color: ColorById.color2}}
              initial={{opacity: 0}}
              animate={{opacity: 1}} transition={{delay: .1}}>
              <h1>{ColorById.color1}</h1>
            </motion.div>
            <motion.div className="colorInformation" 
            style={{background:ColorById.color2, color: ColorById.color1}}
            initial={{opacity: 0}}
            animate={{opacity: 1}} transition={{delay: .2}}>
              <h1>{ColorById.color2}</h1>
            </motion.div>
            <motion.div className="colorInformation" 
            style={{background:ColorById.color3, color: ColorById.color1}}
            initial={{opacity: 0}}
            animate={{opacity: 1}} transition={{delay: .3}}>
              <h1>{ColorById.color3}</h1>
            </motion.div>
          </div>
          <motion.div className="colorPageExample" initial={{opacity: 1}} animate={{opacity: 1}} transition={{delay: .4}}>
            <h1>Preview</h1>
            <div className="example" style={{background:ColorById.color1}}>
              <div className="exampleCircle" style={{background:ColorById.color2}}></div>
              <h1 style={{color:ColorById.color3}}>ColorManager</h1>
            </div>
          </motion.div>
          <div className="colorsByCreator">
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .5}}>More palettes</motion.h1>
            <section>
              {ColorsByCreator.map((color, i)=> (
                <motion.div className="creatorExample" 
                style={{background:color.color1}} 
                initial={{opacity: 0}} animate={{opacity: 1}}
                transition={{delay: i*.05}}
                onClick={() => NavigateToSuggestedColor(color.id!)}>
                  <div className="creatorExampleCircle" style={{background: color.color2}}></div>
                  <h1 style={{color: color.color3}}>ColorManager</h1>
                </motion.div>
              ))}
            </section>
          </div>
    </div>
  )
}
}

export default ColorPage