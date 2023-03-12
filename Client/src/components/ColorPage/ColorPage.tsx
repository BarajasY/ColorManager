import React, {useEffect, useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../ColorsContext';
import { ColorById, getColorById, Colors, setColorById } from '../../types';
import './ColorPage.css';

const ColorPage = () => {
  const [Loading, setLoading] = useState(false)
  const {ColorById} = useContext(Context) as ColorById
  const {getColorById} = useContext(Context) as getColorById
  const PageId = useParams()
  const ToNumber = Number(PageId.id)
  
  useEffect(() => {
        getColorById(ToNumber);
        setLoading(true)
    }, [])

    if(!Loading) {
      return (
        <h1>Loading</h1>
      )
    } else {

      
      return (
        <div className="colorPageContainer">
        <h1>Creator: {ColorById.creator}</h1>
        <div className="colorPageContent">
          <div className="colorInformation" style={{background:ColorById.color1}}>
            <h1>{ColorById.color1}</h1>
          </div>
          <div className="colorInformation" style={{background:ColorById.color2}}>
            <h1>{ColorById.color2}</h1>
          </div>
          <div className="colorInformation" style={{background:ColorById.color3}}>
            <h1>{ColorById.color3}</h1>
          </div>
        </div>
    </div>
  )
}
}

export default ColorPage