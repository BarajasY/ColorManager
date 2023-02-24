import React, { useContext, useEffect } from 'react';
import './Browse.css'
import { Context } from '../../ColorsContext';
import { getAllColors, Color } from '../../types';

const Browse = () => {

    const {getAllColors} = useContext(Context) as getAllColors

    const UnparsedRColors = sessionStorage.getItem("all")
    const AllColors: Color[] = JSON.parse(UnparsedRColors!);

    useEffect(() => {
        getAllColors()
    }, [])
    

  return (
    <div className="browseContainer">
        {AllColors.map(color => (
            <>
            <div style={{background: color.color1}}></div>
            <div style={{background: color.color2}}></div>
            <div style={{background: color.color3}}></div>
            </>
        ))}
    </div>
  )
}

export default Browse