import React, { useContext, useEffect } from 'react';
import './Browse.css'
import { Context } from '../../ColorsContext';
import { Color } from '../../types';

const Browse = () => {
    const UnparsedRColors = sessionStorage.getItem("all")
    const AllColors: Color[] = JSON.parse(UnparsedRColors!);

  return (
    <div className="browseContainer">
      <div className="content">
        {AllColors.map((color) => (
          <div className="colorsWrapper">
            <h1>{color.creator}</h1>
            <div className="colorsContainer" key={color.id} style={{background:color.color1}}>
                <div className="colorCircle" style={{background:color.color2}}></div>
                <h1 style={{color: color.color3}}>ColorManager</h1>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Browse